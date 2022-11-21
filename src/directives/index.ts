import type { Directive, DirectiveBinding } from "vue";
import { ElMessage } from "element-plus";

type DirObj = {
  [s: string]: Directive;
};

const dirObj: DirObj = {
  vIsPro: {
    mounted: (el: HTMLElement, dir: DirectiveBinding) => {
      if (import.meta.env.MODE == "development") {
        el?.parentElement?.removeChild(el);
        ElMessage({
          type: "success",
          message: "权限校验成功",
        });
      }
    },
  },
};

export default dirObj;
