<script>
import axios from 'axios'
import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'
export default {
  name: 'NewRegularSingleTest',
  components: {},
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({
    options_count: 0,
    cur_option: 1,
    new_test: { title: '', type: 1, options: [], answers: [] }
  }),

  methods: {
    setTitle(e) {
      this.new_test.title = e.target.value
    },
    add(option) {
      this.options_count++
      this.new_test.options.push(this.cur_option)
    },
    moveTo(url) {
      this.$router.push(url)
    },
    async handleSubmit(e) {
      e.preventDefault()
      console.log('submiting ', this.new_test)
      await axios.post(`${BASEURL}/tests`, this.new_test).then((response) => {
        this.new_test_id = response.data._id
        console.log('response is ---> ', response)
      })

      await axios
        .put(
          `${BASEURL}/tests_groups/${this.$route.params.group_id}/tests/${this.new_test_id}`
        )
        .then((response) => {
          // this.new_test_id = response.data._id
          console.log('add test ,response is ---> ', response)
          this.moveTo(
            `/test_menu/${this.$route.params.user_id}/${this.$route.params.group_id}`
          )
        })
    },
    handleChange(e) {
      this.cur_option = e.target.value
    },
    selectAnswer(i) {
      this.new_test = { ...this.new_test, answers: [i] }
    }
  },
  mounted: function () {
    console.log('new single choice user id: ', this.$route.params.user_id)
  }
}
</script>
<template>
  <h2>New Single Select Tes 1</h2>
  <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
  <h4>NewRegularSingleTest.vue</h4>
  <div>
    <form @submit="handleSubmit">
      <label for="question">Quesion</label>
      <input type="text" @input="setTitle" />
      <!-- <div v-if="this.new_test.options.length < 2"> -->
      <div>
        <input
          type="text"
          class="option"
          @input="(e, options_count) => handleChange(e, options_count)"
        />&nbsp;<span @click="add">+</span>&nbsp;<span>x</span>
        <!-- </div> -->
      </div>
      <button type="submit">submit</button>
    </form>
    <div>
      <div>{{ new_test.title }}</div>
      <div v-for="(option, index) in this.new_test.options">
        <input
          type="radio"
          name="singleSelTest"
          value="option"
          @input="selectAnswer(index + 1)"
        />
        {{ option }}
      </div>
    </div>
  </div>
</template>
<style scoped></style>
