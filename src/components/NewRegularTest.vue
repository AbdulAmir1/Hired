<script>
import NewRegularTestMenu from './NewRegularTestMenu.vue'
export default {
  name: 'NewRegularTest',
  components: { NewRegularTestMenu },
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
  mounted: function () {}
}
</script>
<template>
  <div>
    <h2>New Regular Test</h2>
    <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
    <NewRegularTestMenu
      :user_id="this.$route.params.user_id"
      :group_id="this.$route.params.group_id"
    />
  </div>
</template>
<style scoped></style>
