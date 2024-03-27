<script>
import axios from 'axios'
import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'
export default {
  name: 'TestCollection',
  components: {},
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ testsCollections: null, newCol_id: '' }),

  methods: {
    moveTo(url) {
      console.log('moving..to', url)
      this.$router.push(url)
    },
    async getTestCollections(user_id) {
      await axios
        .get(`${BASEURL}/tests_groups/users/${this.user_id}`)
        .then((response) => (this.testsCollections = response.data))
    },
    async viewTestCollection(e, id) {
      this.moveTo(`tests/${id}`)
    },
    async deleteCol(e, id) {
      await axios
        .delete(`${BASEURL}/tests_groups/${id}`)
        .then((response) => (this.testsCollections = response.data))
    },
    async viewDetails(coll_id) {},
    async createTestCollection() {
      const new_Tests_group = {
        user: this.user_id,
        title: 'New Test Collection',
        tests: []
      }
      await axios
        .post(`${BASEURL}/tests_groups`, new_Tests_group)
        .then((response) => (this.newCol_id = response.data._id))
        .then((response) => console.log('new Id is :', this.newCol_id))
        .then((response) => {
          this.moveTo(`/test_menu/${this.user_id}/${this.newCol_id}`)
        })

      // .then((response) => (this.newCol_id = response.data._id))
      // .then((response) => moveTo(`/test_menu/${this.usr_id}/${response._id}`))
    }
  },
  async mounted() {
    console.log('current user :', this.user_id)
    await this.getTestCollections(this.user_id)
    console.log('tests => ', this.testsCollections)
  }
}
</script>
<template>
  <h2>Test collection</h2>
  <div v-if="this.testsCollections">
    <div v-for="collection in this.testsCollections">
      <div class="cyan" @click="(e) => viewTestCollection(e, collection._id)">
        title :
        <span>{{ collection.title }}</span
        >&nbsp;&nbsp;<span @click="(e) => deleteCol(e, collection._id)">X</span>
      </div>
    </div>
  </div>
  <div class="blue" @click="() => createTestCollection()">Add New</div>
</template>
<style scoped>
.cyan {
  background-color: cadetblue;
  margin: 5px 0;
  border: 1px solid black;
}
.blue {
  background-color: blue;
  color: white;
}
</style>
