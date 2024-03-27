<script>
// import TestCollection from './TestCollection.vue'f
export default {
  name: 'TestMenu',
  components: {},
  props: ['user_id'],

  // Or props: [ "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {
    showWallets() {},
    hideWallets() {},
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {
    console.log(
      'In TestMenu : current user id :',
      this.$route.params.user_id,
      ' test_group: ',
      this.$route.params.tests_group_id
    )
  }
}
</script>
<template>
  <h2>Test Menu</h2>
  <!-- <TestCollection /> -->
  <div
    @click="
      moveTo(
        '/regular_test/' +
          this.$route.params.user_id +
          '/' +
          this.$route.params.tests_group_id
      )
    "
  >
    Regular
  </div>
  <div
    @click="
      moveTo(
        `/type_speed_test/${this.$route.params.user_id}/${this.$route.params.tests_group_id}`
      )
    "
  >
    Type Speed
  </div>
</template>
<style scoped></style>
