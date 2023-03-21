<template>
  <nav>
    <!-- <v-app-bar density="prominent" shrink-on-scroll :elevate-on-scroll="userStore.loggedIn" :flat="!userStore.loggedIn" app fixed
      fade-img-on-scroll> -->
    <!-- app-bar的滚动检测能力暂时还没有迁移过来，就离谱，具体可见依赖库 -->
    <v-app-bar class="w-full">
      <template v-slot:image>
        <!-- 为图片下部分增加蒙版，不影响内容显示 -->
        <v-img
          class="w-full"
          :src="app.navImg !== '' ? app.navImg : app.dark ? headerDark : headerLight"
          :gradient="
            app.dark
              ? 'to top, rgba(66,66,66,1), rgba(66,66,66,.5)'
              : 'to top, rgba(255,255,255,1), rgba(255,255,255,.5)'
          "
        />
      </template>

      <v-app-bar-nav-icon @click="app.drawer = !app.drawer" />
      <v-toolbar-title class="font-weight-bold">{{ title }}</v-toolbar-title>

      <!-- <div class="flex-grow-1" /> -->

      <!-- 注意只有增加icon标记，内部的icon才会被按照icon的slot解析成正常大小 -->
      <v-btn icon @click="app.dark = !app.dark">
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>

      <v-menu
        v-if="userStore.loggedIn"
        offset-y
        transition="slide-x-reverse-transition"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ props }">
          <v-btn icon text v-bind="props">
            <v-badge color="red" overlap>
              <template v-slot:badge v-if="userStore.msgNum">
                <span>{{ userStore.msgNum }}</span>
              </template>
              <v-icon dark>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-card
          class="pl-3 pt-2 pr-3 pb-2 elevation-20"
          style="overflow: scroll; z-index: 100 !important"
          min-height="250"
          max-width="550"
        >
          <!-- <NotifCenter /> -->
        </v-card>
      </v-menu>

      <v-btn v-if="userStore.loggedIn" class="ml-3" icon href="Test">
        <v-avatar color="primary" size="46">
          <v-img :src="userStore.avatar || defaultAvatar" />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="app.drawer" app temporary hide-overlay>
      <v-list-item cla :title="siteTitle"></v-list-item>

      <v-divider />

      <v-list nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :href="item.to"
          :active="route.name === item.to"
          link
          exact
        >
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script setup lang="ts">
// 这里需先声明为module
import defaultAvatar from '~/assets/images/avatar/default.jpg';
import headerDark from '~/assets/images/header/defaultDark.jpg';
import headerLight from '~/assets/images/header/defaultLight.png';

// import { ref, reactive, watch, computed } from 'vue';
// import { useRouter } from 'vue-router'; // 引入useRouter

import { useAppStore } from '~/stores/app';
import { useUserStore } from '~/stores/user';
import { siteTitle } from '~/config/strings';

// 定义当前组件可接收的参数，可被直接使用
// 但要想声明变量类型，该方法不能通过泛型来声明，而需要调整声明方式为泛型
// 具体声明方式和接口类似
const props = defineProps<{
  position?: string;
}>();
// 或者可以利用withDefault方法来进行基于泛型的声明

// emit相当于接收传进来的函数

const app = useAppStore();
const userStore = useUserStore();

const route = useRoute();

// 因为reactive只对对象类型有效，即对象、数组和 Map、Set 这样的集合类型
// 对 string、number 和 boolean 这样的 原始类型 无效，因此需要用ref
// 响应式变量声明类型可通过泛型进行
// let messageNum = ref<number>(5);
let timer = ref<any>(null);

// js没有interface，必须制定语言为ts
interface navItem {
  title: string;
  icon: string;
  to: string;
}
const navItems = reactive<navItem[]>([
  { title: 'Today', icon: 'mdi-compass', to: 'Home' },
  {
    title: '搜寻',
    icon: 'mdi-magnify',
    to: 'Home',
  },
  {
    title: '小组列表',
    icon: 'mdi-account-group',
    to: 'list',
  },
  { title: '话题广场', icon: 'mdi-flower', to: 'list' },
]);

// 计算属性声明
// 声明类型通过泛型实现
const title = computed<string>(() => app.title);
const checkLoginIn = computed<string>(() => userStore.token);

// 监听是否登陆状态的变化
watch(checkLoginIn, (newVal) => {
  if (newVal !== 'null') {
    updateNotifCount();

    // update notifications every minute
    if (timer.value !== null) clearInterval(timer.value);
    timer.value = setInterval(() => {
      updateNotifCount();
    }, 60000);
  } else {
    clearInterval(timer);
  }
});

async function updateNotifCount() {
  return;
  // const response = await NotifAPI.getNotifCount()
  // this.messageNum = response.data
}

function test() {
  console.log(1);
}
</script>
