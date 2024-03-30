<script>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    NavBar
  },
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '', objTest: { name: 'obj1', value: 210 } }),

  methods: {
    showWallets() {},
    hideWallets() {}
  },
  mounted: function () {}
}
</script>
<template>
  <!-- <h2>App</h2> -->

  <main>
    <router-view></router-view>
  </main>
</template>
<style scoped></style>
