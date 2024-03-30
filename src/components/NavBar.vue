<script>
export default {
  name: 'NavBar',
  components: {},
  props: [],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {},
  mounted: function () {}
}
</script>
<template>
  <!-- <h2>NavBar</h2> -->
  <router-link to="/home">Home</router-link>
  &nbsp; <router-link to="/about">About</router-link> &nbsp;
  <router-link to="/tests/types">Test Types</router-link>&nbsp;
  <router-link to="/hiring_test/test/start">Start</router-link>&nbsp;
  <router-link to="/user/signup">Sign Up</router-link>&nbsp;
  <router-link to="/user/signin">Sign In</router-link>&nbsp;
</template>
<style scoped></style>
