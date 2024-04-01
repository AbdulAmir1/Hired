<script>
export default {
  name: 'TypeSpeedTest',
  components: {},
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {},
  mounted: function () {
    console.log(
      'In TypeSpeedTestMenu : current user id :',
      this.$route.params.user_id,
      ' test_group: ',
      this.$route.params._group_id
    )
  }
}
</script>
<template>
  <h2>TypeSpeedTest</h2>
  <h3>TypeSpeedTest.vue</h3>
</template>
<style scoped></style>
