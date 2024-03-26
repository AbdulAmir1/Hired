<script>
export default {
  name: 'TestMenu',
  components: {},
  props: ['msg', 'obj1', 'header'],

  // Or props: [ "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {
    showWallets() {},
    hideWallets() {},
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {}
}
</script>
<template>
  <h2>Test Menu</h2>
  <div @click="moveTo('/regular_test')">Regular</div>
  <div @click="moveTo('/type_speed_test')">Type Speed</div>
</template>
<style scoped></style>
