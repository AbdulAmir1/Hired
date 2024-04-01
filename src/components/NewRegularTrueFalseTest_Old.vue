<script>
import axios from 'axios'
import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'
export default {
  name: 'NewRegularTrueFalseTest',
  components: {},
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({
    options_count: 0,
    cur_option: 1,
    new_test: { title: '', type: 3, options: [], answers: [] },
    new_test_id: ''
  }),

  methods: {
    setTitle(e) {
      this.new_test.title = e.target.value
    },
    add() {
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
    handleChange(e, i) {
      // console.log('e is ', e)
      this.cur_option = e.target.value
    },
    selectAnswer(i) {
      this.new_test = { ...this.new_test, answers: [i] }
    }
  },
  mounted: function () {
    console.log(
      'new t/f test usr id: ',
      this.$route.params.user_id,
      ' group_id :',
      this.$route.params.group_id
    )
    // this.id = this.user_id
  }
}
</script>
<template>
  <h2>New True False Test</h2>
  <h3>NewRegularTrueFalseTest.vue</h3>
  <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
  <form @submit="handleSubmit">
    <label for="question">Quesion</label>
    <input type="text" @input="setTitle" />
    <div v-if="this.new_test.options.length < 2">
      <div>
        <input
          type="text"
          class="option"
          @input="(e, options_count) => handleChange(e, options_count)"
        />&nbsp;<span @click="add">+</span>&nbsp;<span>x</span>
      </div>
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
</template>
<style scoped></style>
