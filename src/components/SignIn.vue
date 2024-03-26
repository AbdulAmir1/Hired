<script>
export default {
  name: 'SignIn',
  components: {
    MyComponent
  },
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
  <h2>App</h2>
</template>
<style scoped></style>
