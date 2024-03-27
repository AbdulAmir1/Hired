<script>
import { getTestsForUser } from '../services/api'
export default {
  name: 'TestCollection',
  components: {},
  props: ['msg', 'obj1', 'header'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ testsCollections: null }),

  methods: {
    moveTo(url) {
      this.$router.push(url)
    }
  },
  async mounted() {
    this.testsCollections = await getTestsForUser('66027a649471f3ab9ae58aec')
    console.log(this.testsCollections)
  }
}
</script>
<template>
  <h2>Test collection</h2>
</template>
<style scoped></style>
