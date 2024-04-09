// client/src/components/SidePanel/Parameters/DynamicCheckbox.tsx
import { useMemo, useState } from 'react';
import { OptionTypes } from 'librechat-data-provider';
import type { DynamicSettingProps } from 'librechat-data-provider';
import { Label, Checkbox, HoverCard, HoverCardTrigger } from '~/components/ui';
import { useChatContext } from '~/Providers';
import OptionHover from './OptionHover';
import { useLocalize } from '~/hooks';
import { ESide } from '~/common';

function DynamicCheckbox({
  label,
  settingKey,
  defaultValue,
  description,
  columnSpan,
  setOption,
  optionType,
  readonly = false,
  showDefault = true,
}: DynamicSettingProps) {
  const localize = useLocalize();
  const { conversation = {} } = useChatContext();
  const [customValue, setCustomValue] = useState<boolean>(!!(defaultValue as boolean | undefined));

  const selectedValue = useMemo(() => {
    if (optionType === OptionTypes.Custom) {
      // TODO: custom logic, add to payload but not to conversation
      return customValue;
    }

    return conversation?.[settingKey] ?? defaultValue;
  }, [conversation, defaultValue, optionType, settingKey, customValue]);

  const handleCheckedChange = (checked: boolean) => {
    if (optionType === OptionTypes.Custom) {
      // TODO: custom logic, add to payload but not to conversation
      setCustomValue(checked);
      return;
    }
    setOption(settingKey)(checked);
  };

  return (
    <div
      className={`flex flex-col items-center justify-start gap-6 ${
        columnSpan ? `col-span-${columnSpan}` : 'col-span-full'
      }`}
    >
      <HoverCard openDelay={300}>
        <HoverCardTrigger className="grid w-full items-center">
          <div className="flex justify-start gap-4">
            <Label
              htmlFor={`${settingKey}-dynamic-checkbox`}
              className="text-left text-sm font-medium"
            >
              {label ?? settingKey}{' '}
              {showDefault && (
                <small className="opacity-40">
                  ({localize('com_endpoint_default')}:{' '}
                  {defaultValue ? localize('com_ui_yes') : localize('com_ui_no')})
                </small>
              )}
            </Label>
            <Checkbox
              id={`${settingKey}-dynamic-checkbox`}
              disabled={readonly}
              checked={selectedValue}
              onCheckedChange={handleCheckedChange}
              className="mt-[2px] focus:ring-opacity-20 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-50 dark:focus:ring-gray-600 dark:focus:ring-opacity-50 dark:focus:ring-offset-0"
            />
          </div>
        </HoverCardTrigger>
        {description && <OptionHover description={description} side={ESide.Left} />}
      </HoverCard>
    </div>
  );
}

export default DynamicCheckbox;
