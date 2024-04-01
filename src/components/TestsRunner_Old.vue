<script>
import NextTest from './NextTest.vue'

// import NewRegularTestMenu from './NewRegularTestMenu.vue'
export default {
  name: 'TestRunner',
  emits: ['handleTestState'],
  components: { NextTest },
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({
    heading: '',
    couter: 0,
    childState: { a: 1, arr: [0], arr2: [0, 2, 3] }
  }),

  methods: {
    handleStateChange() {
      this.couter++
      this.childState.arr.push(this.couter - 1)
      this.childState.arr2 = []
      this.$emit('handleTestState', this.childState)
    },
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {}
}
</script>
<template>
  <h2>Test Runner</h2>
  <h3>TestsRunner.vue</h3>
  <NextTest />
  <button @click="handleStateChange">Test</button>
</template>
<style scoped></style>
