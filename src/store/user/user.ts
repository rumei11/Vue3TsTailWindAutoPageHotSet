import { defineStore } from "pinia";

const user = defineStore("user", {
  state: () => {
    return {
      name: <string>"",
      age: <number | null>0,
    };
  },
  actions: {
    cUser: function (name: string, age: number): void {
      this.name = name;
      this.age = age;
    },
  },
  getters: {
    useName: function (): string {
      return this.name + "的年龄是";
    },
  },
});

export default user;
