<script>
import axios from 'axios'
import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'
export default {
  name: 'TestDetails',
  components: {},
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({
    test: null,
    testCur: { id: '', title: '', options: [], answers: [] }
  }),

  methods: {
    moveTo(url) {
      this.$router.push(url)
    },

    // async deleteCol(id) {
    //   await axios
    //     .delete(`${BASEURL}/tests_groups/${id}`)
    //     .then((response) => (this.test = response.data))
    // },
    async getTestDetails(id) {
      await axios
        .get(`${BASEURL}/tests/${id}`)
        .then((response) => (this.test = response.data))
    }
  },
  async mounted() {
    await this.getTestDetails(this.$route.params.test_id)
    console.log('tests => ', this.test)
  }
}
</script>
<template>
  <h2>Test</h2>
  <div v-if="this.test">
    <div>Question : {{ test.title }}</div>
    <div v-for="(option, index) of test.options">
      {{ index + 1 }}.&nbsp;{{ option }}
    </div>
  </div>
</template>
<style scoped>
.cyan {
  background-color: cadetblue;
  margin: 5px 0;
}
</style>
