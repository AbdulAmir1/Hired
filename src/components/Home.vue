<script>
import TestCollection from './TestCollection.vue'
// import TestCollection from './TestCollection.vue'
export default {
  name: 'Home',
  components: { TestCollection },
  props: ['msg', 'obj1', 'header'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {}
}
</script>
<template>
  <h2>Home</h2>

  <!-- <div @click="moveTo('/tests')">Test Collections</div> -->
  <TestCollection usr_id="66027a649471f3ab9ae58aec" />
  <!-- <div @click="moveTo('/test_menu')">Tests</div> -->
</template>
<style scoped></style>
