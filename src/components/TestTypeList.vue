<script>
import { addNewTestType } from '../services/api'
export default {
  name: 'TestTypeList',
  components: {},
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {
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
