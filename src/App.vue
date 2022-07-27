<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Store from '@/store/index.js'
import HelloWorld from "./components/HelloWorld.vue";

function selfMap(arr) {
  console.log(Store)
  const obj = {};
  arr.forEach((stateKey) => {
    obj[stateKey] = () => Store.state[stateKey];
  });
  return obj;

  // {
  //  token: () => Store.state[token]
  //}
}

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    console.log(this.token);
    this.$store.commit("increment"); // 4.触发mutations(此方法只能执行同步函数)
    this.$store.dispatch('updateToken') // 5.触发actions(此方法支持异步)
    console.log('userInAndToke', this.$store.getters.userIdAndToken) // 3.getter的获取方法
  },
  computed: {
    token: () => this.$store.state.token, // 1.获取state的值
    // ...mapState(["token", "count", "caseId", "userId"]),
    ...selfMap(["token", "count", "caseId", "userId"]), // 2.简写方式获取state的值
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
