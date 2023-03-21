// https://nuxt.com/docs/api/configuration/nuxt-config
import { settings } from './src/config';
export default defineNuxtConfig({
  // 软件配置
  // app: {
  //   head: {
  //     title: '后台管理系统',
  //     meta: [
  //       { name: 'description', content: 'OA' },
  //       { name: 'keyword', content: '后台管理系统' },
  //     ],
  //     link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  //   },
  // },
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  devServer: {
    host: settings.host,
    port: settings.port,
  },
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    // '~/assets/styles/tailwind.css',
    '~/assets/styles/global.scss',
    '~/assets/styles/vuetify.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
});
