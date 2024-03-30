<script>
import NavBar from './NavBar.vue'
import TestCollections from './TestCollections.vue'
import axios from 'axios'
import BASEURL from '../../config'
// import TestCollection from './TestCollection.vue'
export default {
  name: 'Home',
  components: { NavBar, TestCollections },
  props: [],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({
    user_id: '',
    test2: '',
    allTestCols: null,
    is_creater: false
  }),

  methods: {
    click(col) {
      console.log('clicked', col)
    },
    moveTo(url) {
      this.$router.push(url)
    },
    async getAllTestCollections() {
      await axios
        .get(`${BASEURL}/tests_groups/users/66027a649471f3ab9ae58aec`)
        .then((response) => (this.allTestCols = response.data))
        .then((response) => console.log('response is ', response))
    },
    async getUserDetails() {
      await axios
        .get(`${BASEURL}/users/66027a649471f3ab9ae58aec`)
        .then((response) => {
          console.log('user details response is ', response)
          return response.data
        })
        .then((data) => {
          this.is_creater = data.is_creater
          console.log('data is ', data)
          console.log('is_creater =>', this.is_creater)
        })
    }
  },
  async mounted() {
    this.user_id = this.$route.params.user_id
    this.test2 = 'hello'
    console.log('in Home, user id :', this.user_id)
    await this.getUserDetails()
    await this.getAllTestCollections()
  }
}
</script>
<template>
  <div>
    <NavBar :user="this.user_id" />
    <h2>Home</h2>
    <h3>Home.vue</h3>
    <!-- <div @click="moveTo('/tests')">Test Collections</div> -->
    <div v-if="this.allTestCols" class="flex1">
      <!-- <div>tests</div> -->
      <div v-for="col in allTestCols">
        <div @click="click(col)" class="cyan">{{ col.title }}</div>
      </div>
    </div>
    <div v-if="this.is_creater">
      <TestCollections
        :user="this.user_id"
        :test="121"
        is_creater="iscreater"
      />
    </div>
  </div>
  <!-- <div @click="moveTo('/test_menu')">Tests</div> -->
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
