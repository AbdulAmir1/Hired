<script>
export default {
  name: 'NewRegularTestMenu',
  components: {},
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
  <h2>New Regular Test Menu</h2>
  <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
  <div @click="moveTo('/regular_test/single_select')">Single-Select</div>
  <div @click="moveTo('/regular_test/multi_select')">Multi-Select</div>
  <div @click="moveTo('/regular_test/true_false')">True or False</div>
</template>
<style scoped></style>
