<script>
export default {
  name: 'About',
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
  <h2>About</h2>
  <p>{{ header }}</p>
  <p>{{ this.obj1.name }}</p>
  <p>{{ this.obj1.value }}</p>
</template>
<style scoped></style>
