<script>
import axios from 'axios'
// import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'
export default {
  name: 'MultipleChoiceQuestion',
  components: {},
  props: ['user_id', 'test_group', 'q_index'],
  emits: ['submitQuestion'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({
    options_count: 0,
    cur_option: 1,
    new_test: { title: '', type: 2, options: [], answers: [] },
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

      console.log('submiting ', this.new_test)
      await axios
        .post(`${BASEURL}/tests`, this.new_test)
        .then((response) => {
          this.new_test_id = response.data._id
          console.log('response is ---> ', response)
          return this.new_test_id
        })
        .then((id) => {
          this.$emit('submitQuestion', this.q_index, id)
        })

      await axios
        .put(
          `${BASEURL}/tests_groups/${this.test_group}/tests/${this.new_test_id}`
        )
        .then((response) => {
          // this.new_test_id = response.data._id
          console.log('add test ,response is ---> ', response)
          // this.moveTo(
          //   `/test_menu/${this.test_group}/${this.$route.params.group_id}`
          // )
        })
    },
    handleChange(e, i) {
      // console.log('e is ', e)
      this.cur_option = e.target.value
    },
    selectAnswer(e, i) {
      if (e.target.checked === true) {
        this.new_test.answers.push(i)
        const set = new Set(this.new_test.answers)
        this.new_test = { ...this.new_test, answers: [...set] }
      } else {
        this.new_test.answers = this.new_test.answers.filter((val) => val !== i)
      }
      console.log(
        'this.new_test.answers = ',
        this.new_test.answers,
        ' e.target.checked :',
        e.target.checked
      )
    },
    deleteOption(index) {
      console.log('removing item at ', index)
      this.new_test.options.splice(index, 1)
      this.new_test.answers = []
      console.log('new_test.options are now', this.new_test.options)
    },
    is_selected(index) {
      console.log(
        'this.new_test.answers = , ", this.new_test.answers, " searching for index -- ',
        index
      )
      for (let i = 0; i < this.new_test.answers.length; i++) {
        if (this.new_test.answers[i] === index - 1) {
          return true
        }
      }

      return false
    }
  },
  mounted: function () {
    console.log(
      'new t/f test usr id: ',
      this.$route.params.user_id,
      ' group_id :',
      this.test_group
    )
    // this.id = this.user_id
  }
}
</script>
<template>
  <!-- <h2>New True False Test</h2> -->
  <!-- <h3>NewRegularTrueFalseTest.vue</h3> -->
  <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
  <div class="question">
    <form @submit="handleSubmit">
      <label for="question"></label>
      <input type="text" @input="setTitle" placeholder="question" />
      <!-- <div v-if="this.new_test.options.length < 2"> -->
      <div>{{ new_test.title }}</div>
      <div>
        <input
          type="text"
          class="option"
          @input="(e, options_count) => handleChange(e, options_count)"
          placeholder="answer"
        />&nbsp;<span @click="add" class="add">+</span>
        <!-- </div> -->
      </div>
      <div>
        <div v-for="(option, index) in this.new_test.options">
          <input
            type="checkbox"
            name="singleSelTest"
            value="option"
            @input="(e) => selectAnswer(e, index + 1)"
          />&nbsp; {{ option }}&nbsp;<span
            class="red"
            @click="deleteOption(index)"
            >x</span
          >
          <!-- <span v-if="is_selected(index)"> selected</span> -->
        </div>
      </div>
      <button type="submit" :disabled="new_test.answers.length === 0">
        submit
      </button>
    </form>
  </div>
</template>
<style scoped>
.question {
  width: 40%;
  margin: 20px auto;
  background-color: blanchedalmond;
}
.red {
  color: red;
  background-color: aquamarine;
}
.add {
  height: 22px;
  width: 17px;
  text-align: center;
  font-weight: bold;
  display: inline-block;
  background-color: darkgray;
}
</style>
