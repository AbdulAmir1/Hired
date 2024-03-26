<script>
import NewRegularTestMenu from './NewRegularTestMenu.vue'
export default {
  name: 'NewRegularTest',
  components: { NewRegularTestMenu },
  props: ['msg', 'obj1', 'header'],
  // Or props: ["msg", "name", ...etc.] ,
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
  <h2>New Regular Test</h2>
  <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
  <NewRegularTestMenu />
</template>
<style scoped></style>
