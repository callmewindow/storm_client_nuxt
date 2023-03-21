// import { ref } from 'vue';
// import { storeToRefs } from 'pinia';
import { useAppStore } from '~/stores/app';
import { siteTitleInFull } from '~/config/strings';

export function updateTitle(value: string) {
  // 在外面可能会导致访问到未定义的
  const store = useAppStore();
  // let { title } = storeToRefs(store);
  // title = ref(value); // 直接更新值
  // 或者直接update方法
  store.updateTitle(value);
  // 拼接两部分标题
  document.title = `${value} | ${siteTitleInFull}`;
}
