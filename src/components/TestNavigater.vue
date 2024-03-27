<script>
import TestsRunner from './TestsRunner.vue'
export default {
  name: 'TestNavigater',
  components: { TestsRunner },
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '', testState: { a: 1, arr: [0], arr2: [0] } }),

  methods: {
    handleTestState1(childTestState) {
      console.log('child test state ==> ', childTestState)
      let set = new Set(childTestState.arr)
      console.log('arr to set ==> ', set)
    },
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {}
}
</script>
<template>
  <h2>Next Test</h2>
  <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
  <div>
    <TestsRunner @handleTestState="handleTestState1" />
    <div><span>Prev</span>&nbsp;&nbsp;<span>Next</span></div>
  </div>
  <!-- <NewRegularTestMenu /> -->
</template>
<style scoped></style>
