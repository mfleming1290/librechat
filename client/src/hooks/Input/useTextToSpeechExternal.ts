import { useRecoilValue } from 'recoil';
import { useCallback, useEffect, useState } from 'react';
import { useTextToSpeechMutation } from '~/data-provider';
import { useToastContext } from '~/Providers';
import store from '~/store';

const createFormData = (text: string, voice: string) => {
  const formData = new FormData();
  formData.append('input', text);
  formData.append('voice', voice);
  return formData;
};

function useTextToSpeechExternal() {
  const { showToast } = useToastContext();
  const voice = useRecoilValue(store.voice);
  const cacheTTS = useRecoilValue(store.cacheTTS);
  const playbackRate = useRecoilValue(store.playbackRate);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [text, setText] = useState<string | null>(null);
  const [downloadFile, setDownloadFile] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playAudio = (blobUrl: string) => {
    const newAudio = new Audio(blobUrl);
    if (playbackRate && playbackRate !== 1) {
      newAudio.playbackRate = playbackRate;
    }

    newAudio
      .play()
      .then(() => {
        setIsSpeaking(true);
      })
      .catch((error: Error) => {
        showToast({ message: `Error playing audio: ${error.message}`, status: 'error' });
      });

    newAudio.onended = () => {
      URL.revokeObjectURL(blobUrl);
      setIsSpeaking(false);
    };

    setAudio(newAudio);
    setBlobUrl(blobUrl);
  };

  const downloadAudio = (blobUrl: string) => {
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = 'audio.mp3';
    a.click();
    setDownloadFile(false);
  };

  const { mutate: processAudio, isLoading: isProcessing } = useTextToSpeechMutation({
    onSuccess: async (data: ArrayBuffer) => {
      try {
        const mediaSource = new MediaSource();
        const audio = new Audio();
        audio.src = URL.createObjectURL(mediaSource);
        audio.autoplay = true;

        mediaSource.onsourceopen = () => {
          const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
          sourceBuffer.appendBuffer(data);
        };

        audio.onended = () => {
          URL.revokeObjectURL(audio.src);
          setIsSpeaking(false);
        };

        setAudio(audio);

        if (cacheTTS) {
          const cache = await caches.open('tts-responses');
          const request = new Request(text!);
          const response = new Response(new Blob([data], { type: 'audio/mpeg' }));
          cache.put(request, response);
        }

        if (downloadFile) {
          downloadAudio(audio.src);
        }
      } catch (error) {
        showToast({
          message: `Error processing audio: ${(error as Error).message}`,
          status: 'error',
        });
      }
    },
    onError: (error: unknown) => {
      showToast({ message: `Error: ${(error as Error).message}`, status: 'error' });
    },
  });

  const generateSpeechExternal = async (text: string, download: boolean) => {
    setText(text);
    const cachedResponse = await getCachedResponse(text);

    if (cachedResponse && cacheTTS) {
      handleCachedResponse(cachedResponse, download);
    } else {
      const formData = createFormData(text, voice);
      setDownloadFile(download);
      processAudio(formData);
    }
  };

  const getCachedResponse = async (text: string) => await caches.match(text);

  const handleCachedResponse = async (cachedResponse: Response, download: boolean) => {
    const audioBlob = await cachedResponse.blob();
    const blobUrl = URL.createObjectURL(audioBlob);
    if (download) {
      downloadAudio(blobUrl);
    } else {
      playAudio(blobUrl);
    }
  };

  const cancelSpeech = useCallback(() => {
    if (audio) {
      audio.pause();
      blobUrl && URL.revokeObjectURL(blobUrl);
      setIsSpeaking(false);
    }
  }, [audio, blobUrl]);

  useEffect(() => cancelSpeech, [cancelSpeech]);

  return { generateSpeechExternal, cancelSpeech, isLoading: isProcessing, isSpeaking };
}

export default useTextToSpeechExternal;
