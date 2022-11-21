import { createVNode, render, type App } from "vue";
import Loading from "./Loading.vue";
type load = {
  show: Function;
  hide: Function;
};

export default {
  install(app: App) {
    const vDom = createVNode(Loading);
    render(vDom, document.body);
    let expose = vDom?.component?.exposed as load;
    app.config.globalProperties.$myloading = { ...expose };
  },
};
