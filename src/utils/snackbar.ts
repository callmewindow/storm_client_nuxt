// @ts-check

import { useAppStore } from '~/stores/app';
import { siteTitle } from '~/config/strings';


function displaySnackbarWith(content: string, color: string) {
  const appStore = useAppStore();
  appStore.updateSnackbar({ content, color });
}

export const Snackbar = {
  emitsError: (content: string) => {
    displaySnackbarWith(content, 'error');
  },
  emitsWarning: (content: string) => {
    displaySnackbarWith(content, 'warning');
  },
  emitsSuccess: (content: string) => {
    displaySnackbarWith(content, 'success');
  },
  emitsInfo: (content: string) => {
    displaySnackbarWith(content, 'info');
  },
  collapse: () => {
    useAppStore().updateSnackbar(null);
  },
  underDev: () => {
    Snackbar.emitsInfo(
      `${siteTitle}的开发正在奋斗，敬请后续上线`,
    );
  },
};
