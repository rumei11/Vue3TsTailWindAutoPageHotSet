import { ref, reactive, type Prop } from "vue";

const p = ref<number>(0);

const reac = reactive<Array<string | number>>([1, "2"]);

const showThisMe = (number1: number): any => {
  console.log(number1, this);
};

type Props = {
  title: number;
};

const randDom = (prop: Props, ctx: any) => {
  return (
    // {} 为jsx的模拟 环境
    <h1 onclick={() => p.value++} style={{ cursor: "pointer" }}>
      {/* 当前环境为undefined   不支持修饰符自己实现 */}
      <div class="box" onclick={showThisMe.bind(this, 1)}>
        {/* 不支持for 可以模拟语法环境 */}
        {new Array(5).fill(1).map((_, index) => (
          <span>{_ + index}</span>
        ))}
      </div>
      <hr />
      我是一级别标签：{"被点击次数：" + p.value}
      <hr />
      {/* 这里是点值， 正常环境是可以直接使用ref的 */}
      <span v-model={p.value}></span>
      {Math.random() > 0.5 ? <span>1</span> : <span>2</span>}
      <hr />
      <p onClick={ctx?.emit.bind(this, "get-cP", p.value)}>
        {"父亲的值" + prop.title}
      </p>
    </h1>
  );
};

export default randDom;
