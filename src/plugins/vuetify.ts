// Styles
import 'vuetify/styles';

// icon

// 基于mdi/font
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// Composables
import { createVuetify } from 'vuetify';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        // 声明亮暗主题
        light: {
          dark: false,
          // 不包含在内的属性会保持原本的值
          colors: {
            // primary: colors.deepPurple.accent4,
            primary: '#1867C1',
            secondary: '#5CBBF6',
          },
        },
        dark: {
          dark: true,
          colors: {
            // primary: colors.lightBlue,
            primary: '#ffffff',
          },
        },
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        // account: mdiAccount,
      },
      sets: {
        mdi,
      },
    },
  });

  // 主动使用依赖
  nuxtApp.vueApp.use(vuetify);
});
