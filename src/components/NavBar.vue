<script>
export default {
  name: 'NavBar',
  components: {},
  props: ['msg', 'obj1', 'header'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {
    showWallets() {},
    hideWallets() {}
  },
  mounted: function () {}
}
</script>
<template>
  <!-- <h2>NavBar</h2> -->
  <router-link to="/Home" name="Home">Home</router-link> &nbsp;
  <router-link to="/about">About</router-link> &nbsp;
  <router-link to="/tests/types">Test Types</router-link>&nbsp;
  <router-link to="/hiring_test/1/start">Start</router-link>
</template>
<style scoped></style>
