<script>
export default {
  name: 'NavBar',
  components: {},
  props: ['user'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {},
  mounted: function () {}
}
</script>
<template>
  <div class="main">
    <!-- <router-link to="/home">Home</router-link> -->
    &nbsp; <router-link to="/about">About</router-link> &nbsp;
    <!-- <router-link to="/tests/types">Test Types</router-link>&nbsp; -->
    <!-- <router-link to="/hiring_test/test/start">Start</router-link>&nbsp; -->
    <router-link to="/user/signup">Sign Up</router-link>&nbsp;
    <router-link to="/user/signin">Sign In</router-link>&nbsp;
  </div>
  <!-- <h2>NavBar</h2> -->
</template>
<style scoped>
.main {
  padding: 5px 0;
  color: #fff;
  background-color: #000;
}

.main a {
  color: #fff;
}
</style>
