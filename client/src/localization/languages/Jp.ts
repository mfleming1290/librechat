// Japanese phrases
// file deepcode ignore NoHardcodedPasswords: No hardcoded values present in this file
// file deepcode ignore HardcodedNonCryptoSecret: No hardcoded secrets present in this file

export default {
  com_nav_convo_menu_options: '会話メニューオプション',
  com_ui_artifacts: 'アーティファクト',
  com_ui_artifacts_toggle: 'アーティファクト UI の切替',
  com_nav_info_code_artifacts: 'チャットの横に実験的なコード アーティファクトの表示を有効にします',
  com_ui_include_shadcnui: 'shadcn/uiコンポーネントの指示を含める',
  com_nav_info_include_shadcnui:
    '有効にすると、shadcn/uiコンポーネントを使用するための指示が含まれます。shadcn/uiはRadix UIとTailwind CSSを使用して構築された再利用可能なコンポーネントのコレクションです。注:これらの指示は長文ですので、LLM に正しいインポートとコンポーネントを知らせることが重要でない限り、有効にしないでください。これらのコンポーネントの詳細については、https://ui.shadcn.com/をご覧ください。',
  com_ui_custom_prompt_mode: 'カスタムプロンプトモード',
  com_nav_info_custom_prompt_mode:
    '有効にすると、デフォルトのアーティファクト システム プロンプトは含まれません。このモードでは、アーティファクト生成指示をすべて手動で提供する必要があります。',
  com_ui_artifact_click: 'クリックして開く',
  com_a11y_start: 'AIが返信を開始しました。',
  com_a11y_ai_composing: 'AIはまだ作成中です。',
  com_a11y_end: 'AIは返信を完了しました。',
  com_error_moderation:
    '送信されたコンテンツは、コミュニティガイドラインに準拠していないとして、投稿監視システムによって検知されました。この特定のトピックについては処理を続行できません。他に質問や調べたいトピックがある場合は、メッセージを編集するか、新しい会話を作成してください。',
  com_error_no_user_key: 'キーが見つかりません。キーを入力して再試行してください。',
  com_error_no_base_url: 'ベースURLが見つかりません。ベースURLを入力して再試行してください。',
  com_error_invalid_user_key: '無効なキーが提供されました。キーを入力して再試行してください。',
  com_error_expired_user_key:
    '{0}の提供されたキーは{1}で期限切れです。キーを入力して再試行してください。',
  com_error_input_length:
    '最新のメッセージトークン数は長すぎます。トークン制限 ({0}) を超えています。メッセージを短くするか、会話パラメーターから最大コンテキストサイズを調整するか、会話を分岐して続行してください。',
  com_files_no_results: '結果がありません。',
  com_files_filter: 'ファイルをフィルタリング...',
  com_files_number_selected: '{0} of {1} ファイルが選択されました',
  com_sidepanel_select_assistant: 'アシスタントを選択',
  com_sidepanel_parameters: 'パラメータ',
  com_sidepanel_assistant_builder: 'アシスタントビルダー',
  com_sidepanel_hide_panel: 'パネルを隠す',
  com_sidepanel_attach_files: 'ファイルを添付する',
  com_sidepanel_manage_files: 'ファイルを管理',
  com_sidepanel_conversation_tags: 'ブックマーク',
  com_assistants_capabilities: '機能',
  com_assistants_file_search: 'ファイル検索',
  com_assistants_file_search_info:
    'ファイル検索用のベクトル ストアを添付することはまだサポートされていません。プロバイダ プレイグラウンドからそれらを添付するか、スレッド単位でメッセージにファイルを添付してファイル検索を行うことができます。',
  com_assistants_code_interpreter_info:
    'コードインタプリタは、アシスタントがコードを書いて実行できるようにします。このツールは、さまざまなデータとフォーマットを持つファイルを処理し、グラフなどのファイルを生成することができます。',
  com_assistants_knowledge: 'ナレッジ',
  com_assistants_knowledge_info:
    'ナレッジの下でファイルをアップロードする場合、アシスタントとの会話にファイルの内容が含まれる場合があります。',
  com_assistants_knowledge_disabled:
    'ファイルをナレッジとしてアップロードする前に、アシスタントを作成し、コードインタプリタまたは検索を有効にして保存する必要があります。',
  com_assistants_image_vision: 'イメージビジョン',
  com_assistants_append_date: '現在の日付と時刻を追加',
  com_assistants_append_date_tooltip:
    '有効にすると、現在のクライアントの日付と時刻がアシスタントのシステム指示に追加されます。',
  com_assistants_code_interpreter: 'コードインタプリタ',
  com_assistants_code_interpreter_files: '次のファイルはコードインタプリタでのみ使用できます。',
  com_assistants_retrieval: '検索',
  com_assistants_search_name: 'アシスタントの名前で検索',
  com_ui_tools: 'ツール',
  com_assistants_actions: 'アクション',
  com_assistants_add_tools: 'ツールを追加',
  com_assistants_add_actions: 'アクションを追加',
  com_assistants_non_retrieval_model:
    'このモデルではファイル検索機能は有効になっていません。別のモデルを選択してください。',
  com_assistants_available_actions: '利用可能なアクション',
  com_assistants_running_action: 'アクションを実行',
  com_assistants_completed_action: 'Talked to {0}',
  com_assistants_completed_function: 'Ran {0}',
  com_assistants_function_use: 'アシスタントが {0} を使用しました',
  com_assistants_domain_info: 'アシスタントがこの情報を {0} に送信しました',
  com_assistants_delete_actions_success: 'アシスタントからアクションが削除されました',
  com_assistants_update_actions_success: 'アクションが作成または更新されました',
  com_assistants_update_actions_error: 'アクションの作成または更新中にエラーが発生しました。',
  com_assistants_delete_actions_error: 'アクションの削除中にエラーが発生しました。',
  com_assistants_actions_info:
    'アシスタントが API を介して情報を取得したり、アクションを実行したりできるようにします\'s',
  com_assistants_name_placeholder: 'オプション: アシスタントの名前',
  com_assistants_instructions_placeholder: 'アシスタントが使用するシステム指示',
  com_assistants_description_placeholder: 'オプション: ここにアシスタントについて説明します',
  com_assistants_actions_disabled: 'アクションを追加する前にアシスタントを作成する必要があります。',
  com_assistants_update_success: 'アップデートに成功しました',
  com_assistants_update_error: 'アシスタントの更新中にエラーが発生しました。',
  com_assistants_create_success: 'アシスタントが正常に作成されました。',
  com_assistants_create_error: 'アシスタントの作成中にエラーが発生しました。',
  com_assistants_conversation_starters: '会話のきっかけ',
  com_assistants_conversation_starters_placeholder: '会話のきっかけを入力してください',
  com_sidepanel_agent_builder: 'エージェントビルダー',
  com_agents_name_placeholder: 'オプション: エージェントの名前',
  com_agents_description_placeholder: 'オプション: エージェントの説明を入力してください',
  com_agents_instructions_placeholder: 'エージェントが使用するシステムの指示',
  com_agents_search_name: '名前でエージェントを検索',
  com_agents_update_error: 'エージェントの更新中にエラーが発生しました。',
  com_agents_create_error: 'エージェントの作成中にエラーが発生しました。',
  com_ui_date_today: '今日',
  com_ui_date_yesterday: '昨日',
  com_ui_date_previous_7_days: '過去7日間',
  com_ui_date_previous_30_days: '過去30日間',
  com_ui_date_january: '1月',
  com_ui_date_february: '2月',
  com_ui_date_march: '3月',
  com_ui_date_april: '4月',
  com_ui_date_may: '5月',
  com_ui_date_june: '6月',
  com_ui_date_july: '7月',
  com_ui_date_august: '8月',
  com_ui_date_september: '9月',
  com_ui_date_october: '10月',
  com_ui_date_november: '11月',
  com_ui_date_december: '12月',
  com_ui_field_required: '必須入力項目です',
  com_ui_download_error:
    'ファイルのダウンロード中にエラーが発生しました。ファイルが削除された可能性があります。',
  com_ui_attach_error_type: 'エンドポイントでサポートされていないファイルタイプ:',
  com_ui_attach_error_openai: '他のエンドポイントにアシスタントファイルを添付することはできません',
  com_ui_attach_warn_endpoint:
    '互換性のあるツールがない場合、非アシスタントのファイルは無視される可能性があります',
  com_ui_attach_error_size: 'エンドポイントのファイルサイズ制限を超えました:',
  com_ui_attach_error:
    'ファイルを添付できません。会話を作成または選択するか、ページを更新してみてください。',
  com_ui_examples: '例',
  com_ui_new_chat: '新規チャット',
  com_ui_happy_birthday: '初めての誕生日です！',
  com_ui_experimental: '実験機能',
  com_ui_on: 'オン',
  com_ui_off: 'オフ',
  com_ui_yes: 'はい',
  com_ui_no: 'いいえ',
  com_ui_ascending: '昇順',
  com_ui_descending: '降順',
  com_ui_show_all: 'すべて表示',
  com_ui_name: '名前',
  com_ui_date: '日付',
  com_ui_storage: 'ストレージ',
  com_ui_context: 'コンテキスト',
  com_ui_size: 'サイズ',
  com_ui_host: 'ホスト',
  com_ui_update: '更新',
  com_ui_authentication: '認証',
  com_ui_instructions: '指示文',
  com_ui_description: '概要',
  com_ui_error: 'エラー',
  com_ui_error_connection: 'サーバーへの接続中にエラーが発生しました。ページを更新してください。',
  com_ui_select: '選択',
  com_ui_input: '入力',
  com_ui_close: '閉じる',
  com_ui_endpoint: 'エンドポイント',
  com_ui_provider: 'プロバイダ',
  com_ui_model: 'モデル',
  com_ui_model_parameters: 'モデルパラメータ',
  com_ui_model_save_success: 'モデルパラメータが正常に保存されました',
  com_ui_select_model: 'モデル選択',
  com_ui_select_provider: 'プロバイダーを選択してください',
  com_ui_select_provider_first: '最初にプロバイダーを選択してください',
  com_ui_select_search_model: '名前でモデルを検索',
  com_ui_select_search_plugin: 'プラグイン名で検索',
  com_ui_use_prompt: 'プロンプトの利用',
  com_ui_prev: '前',
  com_ui_next: '次',
  com_ui_stop: '止める',
  com_ui_upload_files: 'ファイルをアップロード',
  com_ui_prompt: 'プロンプト',
  com_ui_prompts: 'プロンプト',
  com_ui_prompt_name: 'プロンプト名',
  com_ui_delete_prompt: 'プロンプトを消しますか?',
  com_ui_admin: '管理者',
  com_ui_simple: 'シンプル',
  com_ui_versions: 'バージョン',
  com_ui_version_var: 'バージョン {0}',
  com_ui_advanced: '高度',
  com_ui_admin_settings: '管理者設定',
  com_ui_error_save_admin_settings: '管理者設定の保存にエラーが発生しました。',
  com_ui_prompt_preview_not_shared: 'このプロンプトに対して共同作業が許可されていません。',
  com_ui_prompt_name_required: 'プロンプト名は必須です',
  com_ui_prompt_text_required: 'テキストは必須です',
  com_ui_prompt_text: 'テキスト',
  com_ui_back_to_chat: 'チャットに戻る',
  com_ui_back_to_prompts: 'プロンプトに戻る',
  com_ui_categories: 'カテゴリ',
  com_ui_filter_prompts_name: '名前でプロンプトをフィルタ',
  com_ui_search_categories: 'カテゴリを検索',
  com_ui_manage: '管理',
  com_ui_variables: '変数',
  com_ui_variables_info:
    'テキスト内で二重中括弧を使用して変数を定義します。例えば、`{{example variable}}`のようにすると、プロンプトを使用するときに後で値を埋め込むことができます。',
  com_ui_special_variables: '特殊変数:',
  com_ui_special_variables_info:
    '`{{current_date}}`は現在の日付、`{{current_user}}`は指定されたアカウント名に使用します。',
  com_ui_dropdown_variables: 'ドロップダウン変数:',
  com_ui_dropdown_variables_info:
    'プロンプトのカスタムドロップダウンメニューを作成します: `{{variable_name:option1|option2|option3}}`',
  com_ui_showing: '表示',
  com_ui_of: 'of',
  com_ui_entries: 'エントリー',
  com_ui_pay_per_call: 'すべてのAIモデルを1つの場所で。支払いは使った分だけ',
  com_ui_new_footer: 'すべてのAIモデルを1つの場所で。',
  com_ui_latest_footer: 'Every AI for Everyone.',
  com_ui_enter: '入力',
  com_ui_submit: '送信する',
  com_ui_none_selected: '選択されていません',
  com_ui_upload_success: 'アップロード成功',
  com_ui_upload_error: 'ファイルのアップロード中にエラーが発生しました。',
  com_ui_upload_invalid:
    'アップロードに無効なファイルです。制限を超えない画像である必要があります。',
  com_ui_upload_invalid_var:
    'アップロードに無効なファイルです。 {0} MBまでの画像である必要があります。',
  com_ui_cancel: 'キャンセル',
  com_ui_save: '保存',
  com_ui_renaming_var: '改名 "{0}"',
  com_ui_save_submit: '保存 & 送信',
  com_user_message: 'あなた',
  com_ui_read_aloud: '読み上げる',
  com_ui_copied: 'コピーしました！',
  com_ui_copy_code: 'コードをコピーする',
  com_ui_copy_to_clipboard: 'クリップボードへコピー',
  com_ui_copied_to_clipboard: 'コピーしました',
  com_ui_fork: '分岐',
  com_ui_fork_info_1: 'この設定を使うと、希望の動作でメッセージを分岐させることができます。',
  com_ui_fork_info_2:
    '「分岐」とは、現在の会話から特定のメッセージを開始/終了点として新しい会話を作成し、選択したオプションに従ってコピーを作成することを指します。',
  com_ui_fork_info_3:
    '「ターゲットメッセージ」とは、このポップアップを開いたメッセージか、"{0}"にチェックを入れた場合は会話の最新のメッセージを指します。',
  com_ui_fork_info_visible:
    'この設定は、ターゲットメッセージへの直接の経路のみを表示し、分岐は表示しません。つまり、表示メッセージのみを抽出して表示するということです。',
  com_ui_fork_info_branches:
    'この設定では、表示されているメッセージとそれに関連するブランチ（つまり、ターゲットメッセージに至る直接の経路上のブランチを含む）を分岐させます。',
  com_ui_fork_info_target:
    'この設定では、対象のメッセージとその近傍のメッセージを含む、すべてのメッセージの枝を分岐させます。つまり、表示されているかどうか、同じ経路上にあるかどうかに関係なく、すべてのメッセージの枝が含まれます。',
  com_ui_fork_info_start:
    'チェックを入れると、上記で選択した動作に従って、このメッセージから会話の最新のメッセージまで分岐が開始されます。',
  com_ui_fork_info_remember:
    'この設定を有効にすると、今後の会話で同じオプションを選択する手間が省けるようになります。お好みの設定を記憶させることで、会話の分岐をスムーズに行えるようになります。',
  com_ui_fork_success: '会話の分岐に成功しました',
  com_ui_fork_processing: '会話を分岐しています...',
  com_ui_fork_error: '会話を分岐できませんでした。エラーが発生しました。',
  com_ui_fork_change_default: 'デフォルトの分岐オプション',
  com_ui_fork_default: 'デフォルトの分岐オプションを使用する',
  com_ui_fork_remember: '以前の会話内容を記憶する',
  com_ui_fork_split_target_setting: 'デフォルトで対象メッセージから分岐を開始する',
  com_ui_fork_split_target: 'ここで分岐を開始',
  com_ui_fork_remember_checked:
    '選択した内容は、次回の利用時にも記憶されます。設定から変更できます。',
  com_ui_fork_all_target: 'すべてを対象に含める',
  com_ui_fork_branches: '関連ブランチを含める',
  com_ui_fork_visible: '表示メッセージのみ',
  com_ui_fork_from_message: '分岐オプションを選択する',
  com_ui_mention:
    'エンドポイント、アシスタント、またはプリセットを素早く切り替えるには、それらを言及してください。',
  com_ui_add_model_preset: '追加の応答のためのモデルまたはプリセットを追加する',
  com_assistants_max_starters_reached: '会話の開始が最大数に達しました',
  com_ui_regenerate: '再度 生成する',
  com_ui_continue: '続きを生成する',
  com_ui_edit: '編集',
  com_ui_loading: '読み込み中...',
  com_ui_success: '成功',
  com_ui_all: 'すべて',
  com_ui_all_proper: 'すべて',
  com_ui_clear: '削除する',
  com_ui_revoke: '無効にする',
  com_ui_revoke_info: 'ユーザへ発行した認証情報をすべて無効にする。',
  com_ui_import_conversation: 'インポート',
  com_ui_nothing_found: '該当するものが見つかりませんでした',
  com_ui_go_to_conversation: '会話に移動する',
  com_ui_import_conversation_info: 'JSONファイルから会話をインポートする',
  com_ui_import_conversation_success: '会話のインポートに成功しました',
  com_ui_import_conversation_error: '会話のインポート時にエラーが発生しました',
  com_ui_import_conversation_file_type_error: 'サポートされていないインポート形式です',
  com_ui_confirm_action: '実行する',
  com_ui_chat: 'チャット',
  com_ui_chat_history: 'チャット履歴',
  com_ui_controls: '管理',
  com_ui_dashboard: 'ダッシュボード',
  com_ui_chats: 'チャット',
  com_ui_avatar: 'アバター',
  com_ui_unknown: '不明',
  com_ui_result: '結果',
  com_ui_image_gen: '画像生成',
  com_ui_assistant: 'アシスタント',
  com_ui_assistant_deleted: 'アシスタントが正常に削除されました',
  com_ui_assistant_delete_error: 'アシスタントの削除中にエラーが発生しました。',
  com_ui_assistants: 'アシスタント',
  com_ui_attachment: '添付ファイル',
  com_ui_assistants_output: 'Assistantsの出力',
  com_ui_agent: 'エージェント',
  com_ui_agent_deleted: 'エージェントを正常に削除しました',
  com_ui_agent_delete_error: 'エージェントの削除中にエラーが発生しました',
  com_ui_agents: 'エージェント',
  com_ui_delete_agent_confirm: 'このエージェントを削除してもよろしいですか？',
  com_ui_delete: '削除',
  com_ui_create: '作成',
  com_ui_create_prompt: 'プロンプトを作成する',
  com_ui_share: '共有',
  com_ui_share_var: '{0} を共有',
  com_ui_enter_var: '{0} を入力',
  com_ui_copy_link: 'リンクをコピー',
  com_ui_update_link: 'リンクを更新する',
  com_ui_create_link: 'リンクを作成する',
  com_ui_share_to_all_users: '全ユーザーと共有',
  com_ui_my_prompts: 'マイ プロンプト',
  com_ui_no_category: 'カテゴリなし',
  com_ui_shared_prompts: '共有されたプロンプト',
  com_ui_prompts_allow_use: 'プロンプトの使用を許可',
  com_ui_prompts_allow_create: 'プロンプトの作成を許可',
  com_ui_prompts_allow_share_global: '全ユーザーとプロンプトを共有することを許可',
  com_ui_prompt_shared_to_all: 'このプロンプトは全ユーザーと共有されています',
  com_ui_prompt_update_error: 'プロンプトの更新中にエラーが発生しました',
  com_ui_prompt_already_shared_to_all: 'このプロンプトはすでに全ユーザーと共有されています',
  com_ui_description_placeholder: 'オプション:プロンプトを表示するときの説明を入力',
  com_ui_command_placeholder: 'オプション:プロンプトのコマンドまたは名前を入力',
  com_ui_command_usage_placeholder: 'コマンドまたは名前でプロンプトを選択してください',
  com_ui_no_prompt_description: '説明が見つかりません。',
  com_ui_share_link_to_chat: 'チャットへの共有リンク',
  com_ui_share_error: 'チャットの共有リンクの共有中にエラーが発生しました',
  com_ui_share_retrieve_error: '共有リンクの削除中にエラーが発生しました。',
  com_ui_share_delete_error: '共有リンクの削除中にエラーが発生しました。',
  com_ui_share_create_message:
    'あなたの名前と共有リンクを作成した後のメッセージは、共有されません。',
  com_ui_share_created_message:
    'チャットの共有リンクが作成されました。設定から以前共有したチャットを管理できます。',
  com_ui_share_update_message:
    'あなたの名前、カスタム指示、共有リンクを作成した後のメッセージは、共有されません。',
  com_ui_share_updated_message:
    'チャットの共有リンクが更新されました。設定から以前共有したチャットを管理できます。',
  com_ui_shared_link_not_found: '共有リンクが見つかりません',
  com_ui_delete_conversation: 'チャットを削除しますか？',
  com_ui_delete_confirm: 'このチャットは削除されます。',
  com_ui_delete_tool: 'ツールを削除',
  com_ui_delete_tool_confirm: 'このツールを削除してもよろしいですか？',
  com_ui_delete_action: 'アクションを削除',
  com_ui_delete_action_confirm: 'このアクションを削除してもよろしいですか？',
  com_ui_delete_confirm_prompt_version_var:
    'これは、選択されたバージョンを "{0}." から削除します。他のバージョンが存在しない場合、プロンプトが削除されます。',
  com_ui_delete_assistant_confirm: 'このアシスタントを削除しますか？ この操作は元に戻せません。',
  com_ui_rename: 'タイトル変更',
  com_ui_archive: 'アーカイブ',
  com_ui_archive_error: 'アーカイブに失敗しました。',
  com_ui_unarchive: 'アーカイブ解除',
  com_ui_unarchive_error: 'アーカイブ解除に失敗しました。',
  com_ui_more_options: 'More',
  com_ui_preview: 'プレビュー',
  com_ui_upload: 'アップロード',
  com_ui_connect: '接続',
  com_ui_locked: 'ロック',
  com_ui_upload_delay:
    'ファイル "{0}"のアップロードに時間がかかっています。ファイルの検索のためのインデックス作成が完了するまでお待ちください。',
  com_ui_privacy_policy: 'プライバシーポリシー',
  com_ui_terms_of_service: '利用規約',
  com_ui_use_micrphone: 'マイクを使用する',
  com_ui_min_tags: 'これ以上の値を削除できません。少なくとも {0} が必要です。',
  com_ui_max_tags: '最新の値を使用した場合、許可される最大数は {0} です。',
  com_ui_bookmarks: 'ブックマーク',
  com_ui_bookmarks_new: '新しいブックマーク',
  com_ui_bookmark_delete_confirm: 'このブックマークを削除してもよろしいですか？',
  com_ui_bookmarks_title: 'タイトル',
  com_ui_bookmarks_count: 'カウント',
  com_ui_bookmarks_description: '説明',
  com_ui_bookmarks_create_success: 'ブックマークが正常に作成されました',
  com_ui_bookmarks_update_success: 'ブックマークが正常に更新されました',
  com_ui_bookmarks_delete_success: 'ブックマークが正常に削除されました',
  com_ui_bookmarks_create_exists: 'このブックマークは既に存在します',
  com_ui_bookmarks_create_error: 'ブックマークの作成中にエラーが発生しました',
  com_ui_bookmarks_update_error: 'ブックマークの更新中にエラーが発生しました',
  com_ui_bookmarks_delete_error: 'ブックマークの削除中にエラーが発生しました',
  com_ui_bookmarks_add_to_conversation: '現在の会話に追加',
  com_ui_bookmarks_filter: 'ブックマークをフィルタリング...',
  com_ui_no_bookmarks:
    'ブックマークがまだないようです。チャットをクリックして新しいブックマークを追加してください',
  com_ui_no_conversation_id: '会話 ID が見つかりません',
  com_auth_error_login:
    '入力された情報ではログインできませんでした。認証情報を確認した上で再度お試しください。',
  com_auth_error_login_rl:
    'お使いのIPアドレスから短時間に多数のログイン試行がありました。しばらくしてから再度お試しください。',
  com_auth_error_login_ban: '本サービスの利用規約違反のため、一時的にアカウントを停止しました。',
  com_auth_error_login_server:
    'サーバーエラーが発生しています。。しばらくしてから再度お試しください。',
  com_auth_error_login_unverified:
    'アカウントはまだ確認されていません。確認リンクが記載されたメールを確認してください。',
  com_auth_no_account: 'アカウントをお持ちでない場合はこちら',
  com_auth_sign_up: '新規登録',
  com_auth_sign_in: 'ログイン',
  com_auth_google_login: 'Googleでログイン',
  com_auth_facebook_login: 'Facebookでログイン',
  com_auth_github_login: 'Githubでログイン',
  com_auth_discord_login: 'Discordでログイン',
  com_auth_email: 'メール',
  com_auth_email_required: 'メールアドレスは必須です',
  com_auth_email_min_length: 'メールアドレスは最低6文字で入力してください',
  com_auth_email_max_length: 'メールアドレスは最大120文字で入力してください',
  com_auth_email_pattern: '有効なメールアドレスを入力してください',
  com_auth_email_address: 'メールアドレス',
  com_auth_password: 'パスワード',
  com_auth_password_required: 'パスワードは必須です',
  com_auth_password_min_length: 'パスワードは最低8文字で入力してください',
  com_auth_password_max_length: 'パスワードは最大128文字で入力してください',
  com_auth_password_forgot: 'パスワードを忘れた場合はこちら',
  com_auth_password_confirm: '確認用パスワード',
  com_auth_password_not_match: 'パスワードが一致しません',
  com_auth_continue: '続ける',
  com_auth_create_account: 'アカウント登録',
  com_auth_error_create: 'アカウント登録に失敗しました。もう一度お試しください。',
  com_auth_full_name: 'フルネーム',
  com_auth_name_required: 'フルネームは必須です',
  com_auth_name_min_length: 'フルネームは最低3文字で入力してください',
  com_auth_name_max_length: 'フルネームは最大80文字で入力してください',
  com_auth_username: 'ユーザ名 (オプション)',
  com_auth_username_required: 'ユーザー名は必須です',
  com_auth_username_min_length: 'ユーザ名は最低2文字で入力してください',
  com_auth_username_max_length: 'ユーザ名は最大20文字で入力してください',
  com_auth_already_have_account: '既にアカウントがある場合はこちら',
  com_auth_login: 'ログイン',
  com_auth_registration_success_insecure: '登録が完了しました。',
  com_auth_registration_success_generic: 'メールアドレスを確認するために、メールをご確認ください。',
  com_auth_reset_password: 'パスワードをリセット',
  com_auth_click: 'クリック',
  com_auth_here: 'こちら',
  com_auth_to_reset_your_password: 'パスワードをリセットします。',
  com_auth_reset_password_link_sent: 'メールを送信',
  com_auth_reset_password_if_email_exists:
    'そのメールアドレスのアカウントが存在する場合は、パスワードリセット手順が記載されたメールが送信されています。スパムフォルダを必ず確認してください。',
  com_auth_reset_password_email_sent: 'パスワードのリセット方法を記載したメールを送信しました。',
  com_auth_reset_password_success: 'パスワードのリセットに成功しました',
  com_auth_login_with_new_password: '新しいパスワードでログインをお試しください。',
  com_auth_error_invalid_reset_token: '無効なパスワードリセットトークンです。',
  com_auth_click_here: 'ここをクリック',
  com_auth_to_try_again: '再認証する',
  com_auth_submit_registration: '登録をする',
  com_auth_welcome_back: 'おかえりなさい',
  com_auth_back_to_login: 'ログイン画面に戻る',
  com_auth_email_verification_failed: 'メール検証に失敗しました',
  com_auth_email_verification_rate_limited:
    'リクエストが多すぎます。しばらくしてからもう一度お試しください',
  com_auth_email_verification_success: 'メールが正常に検証されました',
  com_auth_email_resent_success: '検証メールが正常に再送信されました',
  com_auth_email_resent_failed: '検証メールの再送信に失敗しました',
  com_auth_email_verification_failed_token_missing: '検証に失敗しました。トークンがありません',
  com_auth_email_verification_invalid: '無効なメール検証です',
  com_auth_email_verification_in_progress: 'メールを検証しています。しばらくお待ちください',
  com_auth_email_verification_resend_prompt: 'メールが届きませんか？',
  com_auth_email_resend_link: 'メールを再送信',
  com_auth_email_verification_redirecting: '{0} 秒後にリダイレクトします...',
  com_endpoint_open_menu: 'Open Menu',
  com_endpoint_bing_enable_sydney: 'Sydney有効化',
  com_endpoint_bing_to_enable_sydney: '(Sydneyを利用する)',
  com_endpoint_bing_jailbreak: 'ジェイルブレイク',
  com_endpoint_bing_context_placeholder:
    'Bingは最大7kトークンの「コンテキスト」を参照できます。具体的な上限は不明ですが、7kトークンを超えるとエラーになる可能性があります。',
  com_endpoint_bing_system_message_placeholder:
    '警告: この機能を悪用するとBingの利用を「制限」される可能性があります。すべての内容を表示するには「System Message」をクリックしてください。省略された場合は、安全と考えられる「Sydney」プリセットが使われます',
  com_endpoint_system_message: 'システムメッセージ',
  com_endpoint_message: 'メッセージ',
  com_endpoint_message_not_appendable: 'メッセージを編集、再入力してください。',
  com_endpoint_default_blank: 'デフォルト: 空',
  com_endpoint_default_false: 'デフォルト: false',
  com_endpoint_default_creative: 'デフォルト: 創造的',
  com_endpoint_default_empty: 'デフォルト: 空',
  com_endpoint_default_with_num: 'デフォルト: {0}',
  com_endpoint_context: 'コンテキスト',
  com_endpoint_tone_style: 'トーンスタイル',
  com_endpoint_token_count: 'トークン数',
  com_endpoint_output: '出力',
  com_endpoint_context_tokens: 'コンテキストトークン数の最大値',
  com_endpoint_context_info: `コンテキストに使用できるトークンの最大数です。リクエストごとに送信されるトークン数を制御するために使用します。
  指定しない場合は、既知のモデルのコンテキストサイズに基づいてシステムのデフォルト値が使用されます。高い値を設定すると、エラーが発生したり、トークンコストが高くなる可能性があります。`,
  com_endpoint_google_temp:
    '大きい値 = ランダム性が増します。低い値 = より決定論的になります。この値を変更するか、Top P の変更をおすすめしますが、両方を変更はおすすめしません。',
  com_endpoint_google_topp:
    'Top-p はモデルがトークンをどのように選択して出力するかを変更します。K(topKを参照)の確率の合計がtop-pの確率と等しくなるまでのトークンが選択されます。',
  com_endpoint_google_topk:
    'Top-k はモデルがトークンをどのように選択して出力するかを変更します。top-kが1の場合はモデルの語彙に含まれるすべてのトークンの中で最も確率が高い1つが選択されます(greedy decodingと呼ばれている)。top-kが3の場合は上位3つのトークンの中から選択されます。(temperatureを使用)',
  com_endpoint_google_maxoutputtokens:
    ' 	生成されるレスポンスの最大トークン数。短いレスポンスには低い値を、長いレスポンスには高い値を指定します。',
  com_endpoint_google_custom_name_placeholder: 'Googleのカスタム名を設定する',
  com_endpoint_prompt_prefix_placeholder:
    'custom instructions か context を設定する。空の場合は無視されます。',
  com_endpoint_instructions_assistants_placeholder:
    'アシスタントの指示を上書きします。これは、実行ごとに動作を変更する場合に便利です。',
  com_endpoint_prompt_prefix_assistants_placeholder:
    'アシスタントの主な指示に加えて、追加の指示やコンテキストを設定します。空欄の場合は無視されます。',
  com_endpoint_custom_name: 'プリセット名',
  com_endpoint_prompt_prefix: 'プロンプトの先頭',
  com_endpoint_prompt_prefix_assistants: '追加の指示',
  com_endpoint_instructions_assistants: '指示をオーバーライドする',
  com_endpoint_temperature: 'Temperature',
  com_endpoint_default: 'デフォルト',
  com_endpoint_top_p: 'Top P',
  com_endpoint_top_k: 'Top K',
  com_endpoint_max_output_tokens: '最大出力トークン数',
  com_endpoint_stop: 'シーケンスを停止',
  com_endpoint_stop_placeholder: 'Enterキー押下で値を区切ります',
  com_endpoint_openai_max_tokens: `オプションの \`max_tokens\` フィールドで、チャット補完時に生成可能な最大トークン数を設定します。

    入力トークンと生成されたトークンの合計長さは、モデルのコンテキスト長によって制限されています。この数値がコンテキストの最大トークン数を超えると、エラーが発生する可能性があります。`,
  com_endpoint_openai_temp:
    '大きい値 = ランダム性が増します。低い値 = より決定論的になります。この値を変更するか、Top P の変更をおすすめしますが、両方を変更はおすすめしません。',
  com_endpoint_openai_max:
    '生成されるトークンの最大値。入力トークンと出力トークンの長さの合計は、モデルのコンテキスト長によって制限されます。',
  com_endpoint_openai_topp:
    'nucleus sampling と呼ばれるtemperatureを使用したサンプリングの代わりに、top_p確率質量のトークンの結果を考慮します。つまり、0.1とすると確率質量の上位10%を構成するトークンのみが考慮されます。この値かtemperatureの変更をおすすめしますが、両方を変更はおすすめしません。',
  com_endpoint_openai_freq:
    '-2.0から2.0の値。正の値を入力すると、テキストの繰り返し頻度に基づいたペナルティを課し、文字通り「同じ文言」を繰り返す可能性を減少させる。',
  com_endpoint_openai_pres:
    '-2.0から2.0の値。正の値は入力すると、新規トークンの出現に基づいたペナルティを課し、新しいトピックについて話す可能性を高める。',
  com_endpoint_openai_resend:
    'これまでに添付した画像を全て再送信します。注意：トークン数が大幅に増加したり、多くの画像を添付するとエラーが発生する可能性があります。',
  com_endpoint_openai_resend_files:
    '以前に添付されたすべてのファイルを再送信します。注意：これにより、トークンのコストが増加し、多くの添付ファイルでエラーが発生する可能性があります。',
  com_endpoint_openai_detail:
    'Visionリクエストの解像度を選択します。"Low"はコストが安くて低解像度、"Highは"コストが高くて高解像度"、"Auto"は画像の解像度に基づいて自動的に選択します。',
  com_endpoint_openai_stop:
    'APIがさらにトークンを生成するのを止めるため、最大で4つのシーケンスを設定可能',
  com_endpoint_openai_custom_name_placeholder: 'ChatGPTのカスタム名を設定する',
  com_endpoint_openai_prompt_prefix_placeholder:
    'システムメッセージに含める Custom Instructions。デフォルト: none',
  com_endpoint_anthropic_temp:
    '0から1の値。分析的・多岐の選択になる課題には0に近い値を入力する。創造的・生成的な課題には1に近い値を入力する。この値か Top P の変更をおすすめしますが、両方の変更はおすすめしません。',
  com_endpoint_anthropic_topp:
    'Top-p はモデルがトークンをどのように選択して出力するかを変更する。K(topKを参照)の確率の合計がtop-pの確率と等しくなるまでのトークンが選択される。',
  com_endpoint_anthropic_topk:
    'Top-k はモデルがトークンをどのように選択して出力するかを変更する。top-kが1の場合はモデルの語彙に含まれるすべてのトークンの中で最も確率が高い1つが選択される(greedy decodingと呼ばれている)。top-kが3の場合は上位3つのトークンの中から選択される。(temperatureを使用)',
  com_endpoint_anthropic_maxoutputtokens:
    '生成されるレスポンスの最大トークン数。短いレスポンスには低い値を、長いレスポンスには高い値を指定する。',
  com_endpoint_anthropic_prompt_cache:
    'プロンプトキャッシュを使用すると、API呼び出し間で大きなコンテキストや指示を再利用でき、コストとレイテンシを削減できます',
  com_endpoint_prompt_cache: 'プロンプトキャッシュを使用する',
  com_endpoint_anthropic_custom_name_placeholder: 'Anthropicのカスタム名を設定する',
  com_endpoint_frequency_penalty: '頻度によるペナルティ',
  com_endpoint_presence_penalty: '既存性によるペナルティ',
  com_endpoint_plug_use_functions: 'Functionsを使用',
  com_endpoint_plug_resend_files: 'ファイルを再送',
  com_endpoint_plug_resend_images: '画像の再送信',
  com_endpoint_plug_image_detail: '画像の詳細',
  com_endpoint_plug_skip_completion: '完了をスキップ',
  com_endpoint_disabled_with_tools: 'ツールで無効化',
  com_endpoint_disabled_with_tools_placeholder: 'ツールが選択されていると無効化されます',
  com_endpoint_plug_set_custom_instructions_for_gpt_placeholder:
    'システムメッセージに含める Custom Instructions。デフォルト: none',
  com_endpoint_import: 'インポート',
  com_endpoint_set_custom_name: 'このプリセットを見つけやすいように名前を設定する。',
  com_endpoint_preset_delete_confirm: '本当にこのプリセットを削除しますか？',
  com_endpoint_preset_clear_all_confirm: '本当にすべてのプリセットを削除しますか？',
  com_endpoint_preset_import: 'プリセットのインポートが完了しました',
  com_endpoint_preset_import_error: 'プリセットのインポートに失敗しました。もう一度お試し下さい。',
  com_endpoint_preset_save_error: 'プリセットの保存に失敗しました。もう一度お試し下さい。',
  com_endpoint_preset_delete_error: 'プリセットの削除に失敗しました。もう一度お試し下さい。',
  com_endpoint_preset_default_removed: 'が無効化されました。',
  com_endpoint_preset_default_item: 'デフォルト:',
  com_endpoint_preset_default_none: '現在有効なプリセットはありません。',
  com_endpoint_preset_title: 'プリセット',
  com_endpoint_preset_saved: '保存しました!',
  com_endpoint_preset_default: 'が有効化されました。',
  com_endpoint_preset: 'プリセット',
  com_endpoint_presets: 'プリセット',
  com_endpoint_preset_selected: 'プリセットが有効化されました!',
  com_endpoint_preset_selected_title: '有効化',
  com_endpoint_preset_name: 'プリセット名',
  com_endpoint_new_topic: '新規トピック',
  com_endpoint: 'エンドポイント',
  com_endpoint_hide: '非表示',
  com_endpoint_show: '表示',
  com_endpoint_examples: ' プリセット名',
  com_endpoint_completion: 'コンプリーション',
  com_endpoint_agent: 'エージェント',
  com_endpoint_show_what_settings: '設定 {0} を表示する',
  com_endpoint_export: 'エクスポート',
  com_endpoint_export_share: 'エクスポート/共有',
  com_endpoint_assistant: 'アシスタント',
  com_endpoint_use_active_assistant: 'アクティブなアシスタントを使用',
  com_endpoint_assistant_model: 'アシスタント モデル',
  com_endpoint_save_as_preset: 'プリセット保存',
  com_endpoint_presets_clear_warning:
    '本当にすべてのプリセットを削除しますか？ この操作は元に戻せません。',
  com_endpoint_not_implemented: 'まだ実装されていません',
  com_endpoint_no_presets: 'プリセットがありません',
  com_endpoint_not_available: 'エンドポイントは利用できません',
  com_endpoint_view_options: 'オプションを見る',
  com_endpoint_save_convo_as_preset: '会話をプリセットとして保存する',
  com_endpoint_my_preset: 'Myプリセット',
  com_endpoint_agent_model: 'エージェントモデル (推奨: GPT-3.5)',
  com_endpoint_completion_model: 'コンプリーションモデル (推奨: GPT-4)',
  com_endpoint_func_hover: 'プラグインをOpenAIの関数として使えるようにする',
  com_endpoint_skip_hover:
    'コンプリーションのステップをスキップする。(最終的な回答と生成されたステップをレビューする機能)',
  com_endpoint_config_key: 'API Keyを設定',
  com_endpoint_assistant_placeholder: '右側のサイドパネルからアシスタントを選択してください',
  com_endpoint_config_placeholder: 'ヘッダーメニューからAPI Keyを設定してください。',
  com_endpoint_config_key_for: 'API Key の設定: ',
  com_endpoint_config_key_name: 'Key',
  com_endpoint_config_value: '値を入力してください',
  com_endpoint_config_key_name_placeholder: 'API key を入力してください',
  com_endpoint_config_key_encryption: '鍵は暗号化されます。削除予定日:',
  com_endpoint_config_key_never_expires: 'キーの有効期限はありません',
  com_endpoint_config_key_expiry: 'すでに有効期限切れです',
  com_endpoint_config_click_here: 'ここをクリック',
  com_endpoint_config_google_service_key: 'Googleサービスアカウントキー',
  com_endpoint_config_google_cloud_platform: '(Google Cloud Platformから)',
  com_endpoint_config_google_api_key: 'Google APIキー',
  com_endpoint_config_google_gemini_api: '(Gemini API)',
  com_endpoint_config_google_api_info: 'Gemeni用のGenerative Language API keyを取得するには',
  com_endpoint_config_key_import_json_key: 'Service Account JSON Key をインポートする。',
  com_endpoint_config_key_import_json_key_success:
    'Service Account JSON Keyのインポートに成功しました。',
  com_endpoint_config_key_import_json_key_invalid:
    '無効なService Account JSON Keyです。正しいファイルかどうか確認してください。',
  com_endpoint_config_key_get_edge_key:
    'Bing用のアクセストークンを取得するためにログインをしてください: ',
  com_endpoint_config_key_get_edge_key_dev_tool:
    'サイトにログインした状態で、開発ツールまたは拡張機能を使用して、_U クッキーの内容をコピーします。もし失敗する場合は次の手順に従ってください。',
  com_endpoint_config_key_edge_instructions: '手順',
  com_endpoint_config_key_edge_full_key_string: 'to provide the full cookie strings.',
  com_endpoint_config_key_chatgpt:
    'ChatGPTの「無料版」のアクセストークンを入手するためにへログインをしてください:',
  com_endpoint_config_key_chatgpt_then_visit: 'つぎに、ここへアクセスしてください:',
  com_endpoint_config_key_chatgpt_copy_token: 'トークンをコピーしてください。',
  com_endpoint_config_key_google_need_to: 'こちらを有効化する必要があります:',
  com_endpoint_config_key_google_vertex_ai: 'Vertex AI を有効化',
  com_endpoint_config_key_google_vertex_api: 'API (Google Cloud) 次に、',
  com_endpoint_config_key_google_service_account: 'サービスアカウントを作成する',
  com_endpoint_config_key_google_vertex_api_role:
    '必ず「作成して続行」をクリックして、少なくとも「Vertex AI ユーザー」権限を与えてください。最後にここにインポートするJSONキーを作成してください。',
  com_nav_account_settings: 'アカウント設定',
  com_nav_font_size: 'メッセージフォントサイズ',
  com_nav_font_size_xs: '極小',
  com_nav_font_size_sm: '小',
  com_nav_font_size_base: '中',
  com_nav_font_size_lg: '大',
  com_nav_font_size_xl: '極大',
  com_nav_welcome_assistant: 'アシスタントを選択してください',
  com_nav_welcome_message: '今日はどのようなご用件でしょうか？',
  com_nav_auto_scroll: 'チャットを開いたときに最新まで自動でスクロール',
  com_nav_hide_panel: '右側のパネルを非表示',
  com_nav_modular_chat: '会話の途中でのエンドポイント切替を有効化',
  com_nav_latex_parsing:
    'メッセージ内の LaTeX の構文解析 (パフォーマンスに影響する可能性があります)',
  com_nav_text_to_speech: 'テキスト読み上げ',
  com_nav_automatic_playback: '最新メッセージを自動再生',
  com_nav_speech_to_text: '音声テキスト変換',
  com_nav_profile_picture: 'プロフィール画像',
  com_nav_change_picture: '画像を変更',
  com_nav_plugin_store: 'プラグインストア',
  com_nav_plugin_install: 'インストール',
  com_nav_plugin_uninstall: 'アンインストール',
  com_ui_add: '追加',
  com_nav_tool_remove: '取り除く',
  com_nav_tool_dialog: 'アシスタントツール',
  com_ui_misc: 'その他',
  com_ui_roleplay: 'ロールプレイ',
  com_ui_write: '執筆',
  com_ui_idea: 'アイデア',
  com_ui_shop: 'ショッピング',
  com_ui_finance: '金融',
  com_ui_code: 'コード',
  com_ui_travel: '旅行',
  com_ui_teach_or_explain: '学習',
  com_ui_select_file: 'ファイルを選択',
  com_ui_drag_drop_file: 'ファイルをここにドラッグアンドドロップ',
  com_ui_upload_image: '画像をアップロード',
  com_ui_select_a_category: 'カテゴリ未選択',
  com_ui_clear_all: 'すべてクリア',
  com_nav_tool_dialog_description:
    'ツールの選択を維持するには、アシスタントを保存する必要があります。',
  com_show_agent_settings: 'エージェント設定を表示',
  com_show_completion_settings: 'コンプリーション設定を表示',
  com_hide_examples: '例を非表示',
  com_show_examples: '例を表示',
  com_nav_plugin_search: 'プラグインを検索',
  com_nav_tool_search: 'ツールを検索',
  com_nav_plugin_auth_error:
    'このプラグインの認証中にエラーが発生しました。もう一度お試しください。',
  com_nav_export_filename: 'ファイル名',
  com_nav_export_filename_placeholder: 'ファイル名を入力してください',
  com_nav_export_type: '形式',
  com_nav_export_include_endpoint_options: 'エンドポイントのオプションを含める',
  com_nav_enabled: '有効化',
  com_nav_not_supported: 'サポートされていません',
  com_nav_export_all_message_branches: 'すべての子メッセージを含める',
  com_nav_export_recursive_or_sequential: '再帰的? or 順次的?',
  com_nav_export_recursive: '再帰的',
  com_nav_export_conversation: '会話をエクスポートする',
  com_nav_export: 'エクスポート',
  com_nav_shared_links: '共有リンク',
  com_nav_shared_links_manage: '管理',
  com_nav_shared_links_empty: '共有リンクはありません。',
  com_nav_shared_links_name: 'タイトル',
  com_nav_shared_links_date_shared: '共有日',
  com_nav_source_chat: 'ソースチャットを表示する',
  com_nav_my_files: '自分のファイル',
  com_nav_theme: 'テーマ',
  com_nav_theme_system: 'システム',
  com_nav_theme_dark: 'ダーク',
  com_nav_theme_light: 'ライト',
  com_nav_enter_to_send: 'Enterキーでメッセージを送信する',
  com_nav_user_name_display: 'メッセージにユーザー名を表示する',
  com_nav_save_drafts: 'ローカルにドラフトを保存する',
  com_nav_chat_direction: 'チャットの方向',
  com_nav_show_code: 'Code Interpreter を使用する際は常にコードを表示する',
  com_nav_auto_send_prompts: 'プロンプト自動送信',
  com_nav_always_make_prod: '常に新しいバージョンを制作する',
  com_nav_clear_all_chats: 'すべてのチャットを削除する',
  com_nav_confirm_clear: '削除を確定',
  com_nav_close_sidebar: 'サイドバーを閉じる',
  com_nav_open_sidebar: 'サイドバーを開く',
  com_nav_send_message: 'メッセージを送信する',
  com_nav_log_out: 'ログアウト',
  com_nav_user: 'ユーザー',
  com_nav_archived_chats: 'アーカイブされたチャット',
  com_nav_archived_chats_manage: '管理',
  com_nav_archived_chats_empty: 'アーカイブされたチャットはありません',
  com_nav_archive_all_chats: 'すべてのチャットをアーカイブ',
  com_nav_archive_all: 'すべてアーカイブする',
  com_nav_archive_name: '名前',
  com_nav_archive_created_at: '作成日',
  com_nav_clear_conversation: '会話を削除する',
  com_nav_clear_conversation_confirm_message:
    '本当にすべての会話を削除しますか？ この操作は取り消せません。',
  com_nav_help_faq: 'ヘルプ & FAQ',
  com_nav_settings: '設定',
  com_nav_search_placeholder: 'メッセージ検索',
  com_nav_delete_account: 'アカウントを削除',
  com_nav_delete_account_confirm: 'アカウントを削除しますか?',
  com_nav_delete_account_button: 'アカウントを完全に削除する',
  com_nav_delete_account_email_placeholder: 'アカウントのメールアドレスを入力してください',
  com_nav_delete_account_confirm_placeholder:
    '続行するには、以下の入力フィールドに「DELETE」と入力してください',
  com_nav_delete_warning: '警告: この操作により、アカウントが完全に削除されます。',
  com_nav_delete_data_info: 'すべてのデータが削除されます。',
  com_nav_conversation_mode: '会話モード',
  com_nav_auto_send_text: 'テキストを自動送信',
  com_nav_auto_send_text_disabled: '無効にするには-1を設定',
  com_nav_auto_transcribe_audio: 'オーディオを自動で書き起こす',
  com_nav_db_sensitivity: 'デシベル感度',
  com_nav_playback_rate: 'オーディオ再生速度',
  com_nav_audio_play_error: 'オーディオの再生エラー: {0}',
  com_nav_audio_process_error: 'オーディオの処理エラー: {0}',
  com_nav_long_audio_warning: '長いテキストの処理には時間がかかります。',
  com_nav_tts_init_error: 'テキスト読み上げの初期化に失敗しました: {0}',
  com_nav_tts_unsupported_error:
    '選択したエンジンでのテキスト読み上げはこのブラウザではサポートされていません。',
  com_nav_source_buffer_error:
    'オーディオ再生の設定エラーが発生しました。ページを更新してください。',
  com_nav_media_source_init_error:
    'オーディオプレーヤーを準備できませんでした。ブラウザの設定を確認してください。',
  com_nav_buffer_append_error:
    'オーディオストリーミングに問題が発生しました。再生が中断される可能性があります。',
  com_nav_speech_cancel_error:
    'オーディオ再生を停止できません。ページを更新する必要があるかもしれません。',
  com_nav_voices_fetch_error:
    '音声オプションを取得できませんでした。インターネット接続を確認してください。',
  com_nav_engine: 'エンジン',
  com_nav_browser: 'ブラウザ',
  com_nav_edge: 'Edge',
  com_nav_external: '外部',
  com_nav_delete_cache_storage: 'TTSキャッシュストレージを削除',
  com_nav_enable_cache_tts: 'キャッシュTTSを有効化',
  com_nav_voice_select: '音声',
  com_nav_enable_cloud_browser_voice: 'クラウドベースの音声を使用',
  com_nav_info_enter_to_send:
    '有効になっている場合、 `ENTER` キーを押すとメッセージが送信されます。無効になっている場合、Enterキーを押すと新しい行が追加され、 `CTRL + ENTER` / `⌘ + ENTER` キーを押してメッセージを送信する必要があります。',
  com_nav_info_save_draft:
    '有効になっている場合、チャットフォームに入力したテキストと添付ファイルがドラフトとしてローカルに自動保存されます。これらのドラフトは、ページをリロードしたり、別の会話に切り替えても利用できます。ドラフトはデバイスにローカルに保存され、メッセージが送信されると削除されます。',
  com_nav_info_fork_change_default:
    '`表示メッセージのみ` は、選択したメッセージへの直接パスのみが含まれます。 `関連ブランチを含める` は、パスに沿ったブランチを追加します。 `すべてを対象に含める` は、接続されているすべてのメッセージとブランチを含みます。',
  com_nav_info_fork_split_target_setting:
    '有効になっている場合、選択した動作に従って、対象メッセージから会話内の最新メッセージまで分岐が開始されます。',
  com_nav_info_user_name_display:
    '有効になっている場合、送信者のユーザー名が送信するメッセージの上に表示されます。無効になっている場合、メッセージの上に「あなた」のみが表示されます。',
  com_nav_info_latex_parsing:
    '有効になっている場合、メッセージ内のLaTeXコードが数式としてレンダリングされます。LaTeXレンダリングが必要ない場合は、これを無効にするとパフォーマンスが向上する場合があります。',
  com_nav_info_revoke:
    'この操作により、提供したすべてのAPIキーが取り消され、削除されます。これらのエンドポイントを引き続き使用するには、資格情報を再入力する必要があります。',
  com_nav_info_delete_cache_storage:
    'この操作により、デバイスに保存されているすべてのキャッシュされたTTS（テキスト読み上げ）オーディオファイルが削除されます。キャッシュされたオーディオファイルは、以前生成されたTTSオーディオの再生を高速化するために使用されますが、デバイスのストレージ容量を消費する可能性があります。',
  // Command Settings Tab
  com_nav_commands: 'Commands',
  com_nav_commands_tab: 'コマンド設定',
  com_nav_at_command: '@-Command',
  com_nav_at_command_description: 'コマンド"@"でエンドポイント、モデル、プリセットを切り替える',
  com_nav_plus_command: '+-Command',
  com_nav_plus_command_description: 'コマンド"+"で複数応答設定を追加する',
  com_nav_slash_command: '/-Command',
  com_nav_slash_command_description: 'コマンド"/"でキーボードでプロンプトを選択する',
  com_nav_command_settings: 'コマンド設定',
  com_nav_command_settings_description: 'チャットで使用できるコマンドをカスタマイズします。',
  com_nav_setting_general: '一般',
  com_nav_setting_chat: 'チャット',
  com_nav_setting_beta: 'ベータ版の機能',
  com_nav_setting_data: 'データ管理',
  com_nav_setting_account: 'アカウント',
  com_nav_setting_speech: 'スピーチ',
  com_nav_language: '言語',
  com_nav_lang_auto: '自動検出',
  com_nav_lang_english: 'English',
  com_nav_lang_chinese: '中文',
  com_nav_lang_german: 'Deutsch',
  com_nav_lang_spanish: 'Español',
  com_nav_lang_french: 'Français ',
  com_nav_lang_italian: 'Italiano',
  com_nav_lang_polish: 'Polski',
  com_nav_lang_brazilian_portuguese: 'Português Brasileiro',
  com_nav_lang_russian: 'Русский',
  com_nav_lang_japanese: '日本語',
  com_nav_lang_swedish: 'Svenska',
  com_nav_lang_korean: '한국어',
  com_nav_lang_vietnamese: 'Tiếng Việt',
  com_nav_lang_traditionalchinese: '繁體中文',
  com_nav_lang_arabic: 'العربية',
  com_nav_lang_turkish: 'Türkçe',
  com_nav_lang_dutch: 'Nederlands',
  com_nav_lang_indonesia: 'Indonesia',
  com_nav_lang_hebrew: 'עברית',
  com_nav_lang_finnish: 'Suomi',
  com_ui_accept: '同意します',
  com_ui_decline: '同意しません',
  com_ui_terms_and_conditions: '利用規約',
  com_ui_no_terms_content: '表示する利用規約の内容はありません',
  com_warning_resubmit_unsupported:
    'このエンドポイントではAIメッセージの再送信はサポートされていません',
  com_error_invalid_request_error:
    'AIサービスがリクエストを処理できませんでした。APIキーが無効であるか、リクエストの形式が正しくない可能性があります。',
  com_error_no_system_messages:
    '選択されたAIサービスまたはモデルはシステムメッセージに対応していません。カスタム指示の代わりにプロンプトを使用してください。',
  com_error_files_dupe: '重複したファイルが検出されました。',
  com_error_files_empty: '空のファイルはアップロードできません',
  com_error_files_upload: 'ファイルのアップロード中にエラーが発生しました。',
  com_error_files_validation: 'ファイルの検証中にエラーが発生しました。',
  com_generated_files: '生成されたファイル:',
  com_download_expired: 'ダウンロードの期限が切れています',
  com_error_files_upload_canceled:
    'ファイルのアップロードがキャンセルされました。注意：アップロード処理が継続している可能性があるため、手動でファイルを削除する必要があるかもしれません。',
  com_download_expires: 'ダウンロードはこちら（有効期限：{0}）',
  com_agents_not_available: 'エージェントは利用できません',
  com_click_to_download: '（ダウンロードするにはこちらをクリック）',
  com_agents_missing_provider_model:
    'エージェントを作成する前に、プロバイダーとモデルを選択してください。',
  com_agents_allow_editing: '他のユーザーにエージェントの編集を許可する',
  com_error_files_process: 'ファイルの処理中にエラーが発生しました。',
  com_agents_enable_file_search: 'ファイル検索を有効にする',
  com_agents_no_access: 'このエージェントを編集する権限がありません。',
  com_agents_file_search_disabled:
    'ファイル検索用のファイルをアップロードする前に、エージェントを作成する必要があります。',
  com_agents_file_search_info:
    '有効にすると、エージェントは以下に表示されているファイル名を正確に認識し、それらのファイルから関連する情報を取得することができます。',
  com_agents_execute_code: 'コードを実行',
  com_ui_agent_editing_allowed: 'このエージェントは他のユーザーが既に編集可能です',
  com_ui_agent_already_shared_to_all: 'このアシスタントは既に全ユーザーに共有されています',
  com_ui_no_changes: '更新する変更はありません',
  com_ui_region: '地域',
  com_ui_select_search_region: '地域名で検索',
  com_ui_select_region: '地域を選択',
  com_ui_revoke_key_endpoint: '{0}のキーを無効にする',
  com_ui_revoke_keys_confirm: 'すべての認証情報を無効にしてもよろしいですか？',
  com_ui_revoke_keys: '認証キーの無効化',
  com_ui_bookmarks_delete: 'ブックマークを削除',
  com_ui_revoke_key_confirm: 'この認証情報を無効にしてもよろしいですか？',
  com_endpoint_search: 'エンドポイントを名前で検索',
  com_ui_add_multi_conversation: '複数のチャットを追加',
  com_nav_tool_dialog_agents: 'エージェントツール',
  com_nav_user_msg_markdown: 'メッセージをマークダウン形式で表示する',
  com_nav_clear_cache_confirm_message: 'キャッシュを削除してもよろしいですか？',
  com_nav_chat_commands: 'チャットコマンド',
  com_nav_stop_generating: '生成を停止',
  com_nav_no_search_results: '検索結果が見つかりません',
  com_nav_chat_commands_info:
    'メッセージの先頭に特定の文字を入力することで、これらのコマンドが有効になります。各コマンドは、決められた文字（プレフィックス）で起動します。メッセージの先頭にこれらの文字をよく使用する場合は、コマンド機能を無効にすることができます。',
};
