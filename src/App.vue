<template>
  <div id="app">
    <nar-bar/>
    <router-view/>
    <tab-bar/>
  </div>

</template>

<script>
import TabBar from "./components/tabBar/tabBar";
import NarBar from "./components/tabHader/narBar";

export default {
  name: 'app',
  components: {
    NarBar,
    TabBar
  }
}
</script>


