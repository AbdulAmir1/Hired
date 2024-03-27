<script>
export default {
  name: 'RegularTest',
  components: {},
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {
    showWallets() {},
    hideWallets() {},
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {
    console.log('RegularTest user_id==>', this.$route.params.user_id)
    console.log('RegularTest group_id==>', this.$route.params.group_id)
  }
}
</script>
<template>
  <h2>Regular Test</h2>
  <div
    @click="
      moveTo(
        `/regular_test/${this.$route.params.user_id}/${this.$route.params.group_id}/new`
      )
    "
  >
    New
  </div>
</template>
<style scoped></style>
