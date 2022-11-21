import { defineStore } from "pinia";

type IDType = number;
type NameType = string;
type PaType = string;

interface pObj {
  id: IDType;
  name11: NameType;
  password: PaType;
}

const logInfo = defineStore("userInfo", {
  state() {
    return <pObj>{
      id: 1,
      name11: "ww",
      password: "qq",
    };
  },

  getters: {
    getUserInfo(): string {
      return `${this.name11}的Id：${this.id},密码： ${this.password}`;
    },
  },

  actions: {
    randUSerId() {
      console.log(arguments, "actions");
    },
  },
});

export default logInfo;
