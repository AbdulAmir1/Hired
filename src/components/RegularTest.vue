<script>
export default {
  name: 'RegularTest',
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
  <h2>Regular Test</h2>
  <div @click="moveTo(`/regular_test/${this.$route.params.user_id}/new`)">
    New
  </div>
</template>
<style scoped></style>
