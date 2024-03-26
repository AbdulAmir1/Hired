<script>
import NavBar from './components/NavBar.vue'
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
    <router-view header="Listings In Miami" :obj1="this.objTest"></router-view>
    // header is a prop example
  </main>
</template>
<style scoped></style>
