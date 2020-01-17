<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App"/>
    <tab-bar/>
  </div>

</template>

<script>
import Home from './components/home/home.vue'
import TabBar from "./components/tabBar/tabBar";

export default {
  name: 'app',
  components: {
    Home,
    TabBar
  }
}
</script>


