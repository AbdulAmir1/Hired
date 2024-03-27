<script>
import TestCollection from './TestCollection.vue'
export default {
  name: 'TestMenu',
  components: { TestCollection },
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
  <TestCollection />
  <div @click="moveTo('/regular_test')">Regular</div>
  <div @click="moveTo('/type_speed_test')">Type Speed</div>
</template>
<style scoped></style>
