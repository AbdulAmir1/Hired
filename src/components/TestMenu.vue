<script>
// import TestCollection from './TestCollection.vue'f
import axios from 'axios'
import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'
export default {
  name: 'TestMenu',
  components: {},
  props: ['user_id'],

  // Or props: [ "name", ...etc.] ,
  data: () => ({ title: '', showMenu: false }),

  methods: {
    async addTitle(e) {
      const new_Tests_group = {
        user: this.user_id,
        title: this.title,
        tests: []
      }
      console.log('Seding id:', `${this.$route.params.tests_group_id}`)
      await axios
        .put(
          `${BASEURL}/tests_groups/${this.$route.params.tests_group_id}`,
          new_Tests_group
        )
        .then((response) => {
          console.log('response ===>', response)
        })

      this.showMenu = !this.showMenu
    },
    handleChange(e) {
      this.title = e.target.value
      console.log(this.title)
    },
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {
    console.log(
      'In TestMenu : current user id :',
      this.$route.params.user_id,
      ' test_group: ',
      this.$route.params.tests_group_id
    )
  }
}
</script>
<template>
  <h2>Test Menu</h2>
  <h3>TestMenu.vue</h3>
  <!-- <TestCollection /> -->
  <h2>New Regular Test</h2>
  <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
  <div v-if="!showMenu">
    <div>Title</div>
    <div>
      <input
        type="text"
        placeholder="add title"
        @input="(e) => handleChange(e)"
      />
    </div>
    <button @click="addTitle">Ok</button>
  </div>
  <div v-if="showMenu">
    <div
      @click="
        moveTo(
          '/regular_test/' +
            this.$route.params.user_id +
            '/' +
            this.$route.params.tests_group_id
        )
      "
    >
      Regular
    </div>

    <div
      @click="
        moveTo(
          `/type_speed_test/${this.$route.params.user_id}/${this.$route.params.tests_group_id}`
        )
      "
    >
      Type Speed
    </div>
  </div>
</template>
<style scoped></style>
