<script>
export default {
  name: 'TestResult',
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
  <h2>TestResult</h2>
</template>
<style scoped></style>
