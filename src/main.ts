import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import ElementPlus from "element-plus";
import mitt from "mitt";
// import "element-plus/dist/index.css";
// animate 内置样式
import "animate.css";
import Loading from "./components/myLoading/index";
import myUse from "./plugin/myUse";
import "@/assets/style/index.css";
import "@/assets/style/reload.scss";

export const app = createApp(App);

myUse(Loading);

const Mitt = mitt();

type load = {
  show: Function;
  hide: Function;
};

type Filter = {
  [name: string]: <T>(str: T) => string;
};

declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mitt;
    $filter: Filter;
    $myloading: load;
  }
}

app.config.globalProperties.$Bus = Mitt;

// .use(ElementPlus) 通过打包插件按需引入
app.use(store).use(router).mount("#app");
