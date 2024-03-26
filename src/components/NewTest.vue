<script>
export default {
  name: 'NewTest',
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
  <h2>NewTest</h2>
</template>
<style scoped></style>
