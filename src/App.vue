<template>
  <div id="app">
    <NavBar></NavBar>
    <div id="background">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
@cblue : #41B883;
@cwhite : #ffffff;

#background {
  content: "";
  display: block;
  width: 100vw;
  height: 200vh;
  padding: 5%;
  background-color: @cblue;
  h3 {
    margin: 0;
    margin-bottom: 1%;
    font-size: 1.5em;
    text-align: center;
    color: @cwhite;
    i {
      width: 13px;
      height: 20px;
      background-color: @cwhite;
    }
  }
}
</style>
<script>
import NavBar from "./components/NavBar/NavBar.vue";

export default {
  components: {
    NavBar
  },
  methods: {}
};
</script>


