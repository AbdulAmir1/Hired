<script>
import TestCollection from './TestCollection.vue'
// import TestCollection from './TestCollection.vue'
export default {
  name: 'Home',
  components: { TestCollection },
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {
    console.log('in Home, user id :', this.user_id)
  }
}
</script>
<template>
  <h2>Home</h2>

  <!-- <div @click="moveTo('/tests')">Test Collections</div> -->
  <TestCollection :user_id="this.user_id" />
  <!-- <div @click="moveTo('/test_menu')">Tests</div> -->
</template>
<style scoped></style>
