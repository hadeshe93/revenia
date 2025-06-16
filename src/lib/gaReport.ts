export const GA_EVENT_MAP = {
  ACTION_SPIN_WHEEL: 'action_spin_wheel',
  ACTION_ADD_WHEEL: 'action_add_wheel',
  ACTION_PLAY_ALL: 'action_play_all',
  ACTION_ENTER_FULL_SCREEN: 'action_enter_full_screen',
  ACTION_EXIT_FULL_SCREEN: 'action_exit_full_screen',
  ACTION_NEW_FILE: 'action_new_file',
  ACTION_SAVE_FILE: 'action_save_file',
  ACTION_OPEN_FILE_LIST: 'action_open_file_list',
  ACTION_SHARE: 'action_share',
  ACTION_THEME_DARK: 'action_theme_dark',
  ACTION_THEME_LIGHT: 'action_theme_light',
};

export function gaReportEvent(eventName: string, ...restEventParams: any[]) {
  try {
    if (!window.gtag) return;
    window.gtag('event', eventName, ...restEventParams);
  } catch (err) {
    console.error('[gaReportEvent] error:', err);
  }
}