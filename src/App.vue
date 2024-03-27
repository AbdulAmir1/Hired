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
  <NavBar />
  <main>
    <router-view user_id="66027a649471f3ab9ae58aec"></router-view>
  </main>
</template>
<style scoped></style>
