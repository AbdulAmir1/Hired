<script>
import axios from 'axios'
import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'
export default {
  name: 'TestCollection',
  components: {},
  props: ['user', 'test'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ testsCollections: null, newCol_id: '' }),

  methods: {
    moveTo(url) {
      console.log('moving..to', url)
      this.$router.push(url)
    },
    async getTestCollections(col_id) {
      await axios
        .get(`${BASEURL}/tests_groups/users/66027a649471f3ab9ae58aec`)
        .then((response) => (this.testsCollections = response.data))
        .then((response) => console.log('response.data is ', response.data))
    },
    async viewTestCollection(e, col, id) {
      console.log('In TestCollection viewTestCollection id is', id)
      console.log('and the collection  is ', col)
      // this.moveTo(`/tests/${this.user_id}/${id}`)
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
    // console.log('Loading...')
    console.log(
      'In TestCollection , current user :',
      this.user,
      ' test is ',
      this.test
    )
    // await this.getTestCollections(this.user_id)
    // console.log('tests => ', this.testsCollections)
  }
}
</script>
<template>
  <div>
    <h2>Test collection</h2>
    <h3>TestCollection.vue</h3>
    <div v-if="this.testsCollections" class="flex1">
      <div
        v-for="collection in this.testsCollections"
        @click="viewTestCollection($event, collection.title, collection._id)"
      >
        <div class="cyan">
          title :
          <span>{{ collection.title }}</span
          >&nbsp;&nbsp;<span
            class="red"
            @click="(e) => deleteCol(e, collection._id)"
            >X</span
          >

          >
        </div>
      </div>
    </div>
    <div class="blue" @click="() => createTestCollection()">Add New</div>
  </div>
</template>
<style scoped>
.cyan {
  background-color: cadetblue;
  margin: 5px 0;
  border: 1px solid black;
}
.blue {
  width: 100px;
  margin: 20px auto;
  background-color: blue;
  color: white;
}

.red {
  color: red;
}

.flex1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  gap: 5px;
  margin: 20px auto;
  background-color: yellow;
}

.flex1 div {
  width: 200px;
  height: 200px;
  margin: 10px auto;
}
</style>
