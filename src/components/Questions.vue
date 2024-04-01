<script>
import axios from 'axios'
// import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'

export default {
  name: 'Questions',
  components: {},
  props: [],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({
    user: { user_id: '', group_id: '' },
    group_id: '',
    user_id: '',
    question_list: [],
    question: null,
    viewUsersList: false,
    new_employee_email: '',
    assigned_to_list: []
  }),

  methods: {
    async handleSubmit(e) {
      e.preventDefault()

      // console.log('user data creds. :', this.user)
    },
    handleChange(e) {
      // console.log(e.target.name)
      this.user[e.target.name] = e.target.value
    },
    moveTo(url, param) {
      this.$router.push({ name: url, params: { user_id: param } })
    },
    async getQuestions() {
      await axios
        .get(`${BASEURL}/tests_groups/${this.group_id}`)
        .then((response) => {
          if (response.data !== '') {
            this.question = response.data
          } else {
            console.log('no quetions found!')
          }
          // this.new_test_id = response.data._id
          console.log('response is ---> ', response)
          return this.question
        })
        .then((q) => {
          this.populateQuestions()
          console.log('tests =< ', q)
        })
    },
    populateQuestions() {
      for (let i = 0; i < this.question.tests.length; i++) {
        this.question_list.push(this.question.tests[i].type)
      }

      console.log(' question types ->', this.question_list)
    },
    foundInAnswers(q_index, index) {
      // for(let i=0;i<this.question.tests[q_index].answers[])
      if (this.question.tests[q_index].answers.includes(index + 1)) {
        console.log('found')
        return true
      }
      console.log('not found')
      return false
    },
    async assignToUser() {
      console.log('assigning to ', this.new_employee_email)
      this.assigned_to_list.push(this.new_employee_email)
      await this.findByEmail(this.new_employee_email)
      this.viewUsersList = false
    },
    async findByEmail(email) {
      await axios
        .get(`${BASEURL}/users/user/email/${email}`)
        .then((response) => {
          if (response.data !== '') {
            this.question = response.data
          } else {
            console.log('no user found!')
          }
          // this.new_test_id = response.data._id
          console.log('response is ---> ', response)
          return this.question
        })
    },
    async assignTo(e) {
      e.preventDefault()
      this.new_employee_email = e.target.value
    }
  },
  async mounted() {
    console.log(
      ' g ==> ',
      this.$route.params.group_id,
      ' u ==> ',
      this.$route.params.user_id
    )
    this.group_id = this.$route.params.group_id
    this.user_id = this.$route.params.user_id
    await this.getQuestions()
  }
}
</script>
<template>
  <div class="questions">
    <!-- {{ this.question.tests.length }} -->
    <div v-if="this.question">
      <div class="title">{{ question.title }}</div>
      <div v-for="(t, q_index) in this.question.tests">
        <div v-if="t.type === 1" class="test">
          {{ t.title }}
          <div v-for="(op, index) in t.options">
            <span v-if="foundInAnswers(q_index, index) === true">
              <input
                type="radio"
                name="singleSelTest"
                value="option"
                @input="selectAnswer(index + 1)"
                checked
              />&nbsp;
            </span>
            <span v-else>
              <!-- <span v-if="foundInAnswers(q_index, index) === false"> -->
              <input
                type="radio"
                name="singleSelTest"
                :value="op"
                @input="selectAnswer(index + 1)"
              />&nbsp;
            </span>
            <!-- </div> -->
            {{ op }}
          </div>
        </div>
        <div v-else-if="t.type === 2" class="test">
          multi-sel
          {{ t.title }}
          <div v-for="(op, index) in t.options">
            <span v-if="foundInAnswers(q_index, index) === true">
              <input
                type="checkbox"
                name="singleSelTest"
                :value="op"
                @input="selectAnswer(index + 1)"
                checked
              />&nbsp;
            </span>
            <span v-else>
              <!-- <span v-if="foundInAnswers(q_index, index) === false"> -->
              <input
                type="checkbox"
                name="singleSelTest"
                :value="op"
                @input="selectAnswer(index + 1)"
              />&nbsp;
            </span>
            <!-- </div> -->
            {{ op }}
          </div>
        </div>
        <div v-else-if="t.type === 3" class="test">
          {{ t.title }}
          <div v-for="(op, index) in t.options">
            <span v-if="foundInAnswers(q_index, index) === true">
              <input
                type="radio"
                name="singleSelTest"
                :value="op"
                @input="selectAnswer(index + 1)"
                checked
              />&nbsp;
            </span>
            <span v-else>
              <!-- <span v-if="foundInAnswers(q_index, index) === false"> -->
              <input
                type="radio"
                name="singleSelTest"
                :value="op"
                @input="selectAnswer(index + 1)"
              />&nbsp;
            </span>
            <!-- </div> -->
            {{ op }}
          </div>
        </div>
        <div v-else-if="t.type === 4" class="test">
          <div>
            {{ t.title }}
          </div>
          <div>
            <textarea
              name="answer"
              id="answer"
              cols="30"
              rows="10"
              placeholder="write here"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <div v-else>No data found</div>

    <form @submit="(e) => handleSubmit(e)">
      <button type="submit" class="addUser" @click="viewUsersList = true">
        Add User
      </button>

      <div v-if="viewUsersList" class="getEmail">
        <div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="user email"
            @input="(e) => assignTo(e)"
          />
        </div>
        <div><button @click="assignToUser">Ok</button></div>
      </div>
    </form>
    <div v-if="assigned_to_list.length > 0">
      <div class="candidate-list">This Test is assingned to :</div>
      <div v-for="email in assigned_to_list" class="candidate-list">
        {{ email }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.questions {
  font-family: Arial, Helvetica, sans-serif;
}
.title {
  width: 30%;
  margin: 20px auto;
  text-align: center;
  color: #fff;
  background-color: #000;
}

.addUser {
  display: block;
  width: fit-content;
  margin: 20px auto;
}

.test {
  width: 30%;
  margin: 10px auto;
  background-color: #eee;
}

.candidate-list {
  width: 30%;
  margin: 10px auto;
  background-color: #eeeeeea0;
}

.getEmail {
  padding: 3px;
  width: 30%;
  margin: 10px auto;
  background-color: #eeeeeea0;
}

.getEmail div {
  width: fit-content;
  margin: 10px auto;
}
</style>
