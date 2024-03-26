<script>
import addNewTestType from '../services/api'
export default {
  name: 'TestTypeList',
  components: {},
  props: ['msg', 'obj1', 'header'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {
    showWallets() {},
    hideWallets() {},
    async addNew() {
      await addNewTestType({ name: 'Single-Selection' })
    }
  },
  mounted: function () {}
}
</script>
<template>
  <button @click="addNew">Add Type</button>
</template>
<style scoped></style>
