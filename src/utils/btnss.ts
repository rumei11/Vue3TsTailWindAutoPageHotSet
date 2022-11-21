type FnName = string;

type List = {
  [key: FnName]: Array<Function>;
};

interface methodsMvc {
  on: (eventName: string, fn: Function) => void;
  emit: (eventName: string, args: Array<any>) => any;
}

class mytype {
  list: List;
  constructor() {
    this.list = {};
  }
}

class ToBrot extends mytype implements methodsMvc {
  constructor() {
    super();
  }

  on(eventName: string, fn: Function): void {
    let arr: Array<Function> = Array.isArray(this.list[eventName])
      ? this.list[eventName]
      : new Array<Function>();
    this.list[eventName] = [...arr, fn];
  }

  emit(eventName: string, ...args: any[]): any {
    if (!Array.isArray(this.list[eventName]))
      return "改事件还未订阅，请订阅后发布。";
    return this.list[eventName].forEach((item) => item.apply(null, args));
  }
}

export default new ToBrot();
