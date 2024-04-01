<script>
import axios from 'axios'
// import { getTestsForUser } from '../services/api'
import newCollectonNameBox from './newCollectonNameBox.vue'
import QuestionTypeMenu from './QuestionTypeMenu.vue'
import TrueFalseQuestion from './TrueFalseQuestion.vue'
import SingleChoiceQuestion from './SingleChoiceQuestion.vue'
import MultipleChoiceQuestion from './MultipleChoiceQuestion.vue'
import WritingQuestion from './WritingQuestion.vue'
import BASEURL from '../../config'
export default {
  name: 'TestCollections',
  components: {
    newCollectonNameBox,
    QuestionTypeMenu,
    TrueFalseQuestion,
    SingleChoiceQuestion,
    MultipleChoiceQuestion,
    WritingQuestion
  },
  props: ['user', 'is_creater'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({
    allTestCols: null,
    question_list: [],
    is_editing: false,
    newCol_id: '',
    showNameBox: false,
    newCol_name: '',
    show_question_types: false
  }),

  methods: {
    moveToQuestions(url, user, group) {
      this.$router.push({
        name: url,
        params: { user_id: user, group_id: group }
      })
    },
    cancel() {
      this.showNameBox = false
      this.is_editing = false
    },
    async getAllTestCollections() {
      await axios
        .get(`${BASEURL}/tests_groups/users/${this.user}`)
        .then((response) => {
          this.allTestCols = response.data
        })
        .then((response) => console.log('response is ', response))
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
        .then(() => this.getAllTestCollections())
    },
    async getName(title) {
      // this.newCol_name = e.target.value
      console.log('e target ==> ', title)
      this.newCol_name = title
      // console.log('new name ==> ', e.target.value)

      await this.postNewTestCol(title).then((id) => {
        // this.newCol_name = e.target.value
        console.log('new name ==> ', this.newCol_name, ', id= ', this.newCol_id)
        this.showNameBox = false
        this.show_question_types = true
        console.log(
          'showing q menu : ',
          this.show_question_types,
          'is editing :',
          this.is_editing
        )
      })

      this.show_question_types = true
    },
    async viewDetails(coll_id) {},

    async createTestCollection() {
      this.is_editing = true
      this.showNameBox = true
      // const test_col_name = this.getName()
    },
    async postNewTestCol(newName) {
      console.log('New col name is ==<', newName)
      // return
      const new_Tests_group = {
        user: this.user,
        title: newName,
        tests: []
      }
      await axios
        .post(`${BASEURL}/tests_groups`, new_Tests_group)
        .then((response) => {
          this.newCol_id = response.data._id
          const col_id = this.newCol_id
          this.populateQuestionsList()
          return col_id
        })
        .then((id) => {
          console.log('new Id is :', id)
          return id
        })
    },
    setNewQuestionType(type) {
      console.log('new question type=', type, ' selected.')
      this.addNewQuetion(type)
    },
    populateQuestionsList() {
      console.log('populating ')
    },
    addNewQuetion(type) {
      this.question_list.push({ type: type, __id: '', is_editible: true })
      console.log('questions_list ==> ', this.question_list)
    },
    updateQuestionList(index, _id) {
      console.log('question ', index, 'of id ', _id, ' updated.')
      this.question_list[index].__id = _id
    },
    deleteQuestion(i, _id) {
      console.log('deleting ', _id, ' ..')
      this.question_list.splice(i, 1)
    }
  },
  async mounted() {
    // console.log('Loading...')
    await this.getAllTestCollections()
    console.log('user is creater =>', this.is_creater)
    console.log('user is  =>', this.user)
    console.log('new collection name  is  =>', this.newCol_name)
    console.log('all test collections for the user ==> ', this.allTestCols)
    // await this.getTestCollections(this.user_id)
    // console.log('tests => ', this.testsCollections)
  }
}
</script>
<template>
  <div>
    <!-- <h2>Test collection</h2>
    <h3>TestCollection.vue</h3> -->
    <!-- <div v-if="is_creater">Creater===></div> -->
    <div v-if="is_editing === false">
      <div v-if="this.allTestCols" class="flex1">
        <div
          v-for="collection in this.allTestCols"
          @click="viewTestCollection($event, collection.title, collection._id)"
        >
          <div class="col">
            <!-- title : -->
            <span>{{ collection.title }}</span
            >&nbsp;&nbsp;<span
              class="red"
              @click="(e) => deleteCol(e, collection._id)"
              >X</span
            >
            <!-- &nbsp;id=&nbsp;<span>{{ collection._id }}</span> -->
          </div>
        </div>
      </div>
      <div class="button1" @click="() => createTestCollection()">Add New</div>
    </div>
    <div v-else>
      <div v-if="showNameBox">
        <newCollectonNameBox
          @addTitle="getName"
          @hideNewTestCollectionNameBox="cancel"
        />
      </div>

      <div class="question-list">
        <div v-for="(q, index) in question_list">
          <div v-if="q.type === 1">
            {{ q.__id }}
            <SingleChoiceQuestion
              @submitQuestion="this.updateQuestionList"
              :user_id="this.user"
              :test_group="this.newCol_id"
              :q_index="index"
            />
            <div
              class="del-q"
              v-if="q.__id !== ''"
              @click="deleteQuestion(index, q.__id)"
            >
              delete
            </div>
          </div>
          <div v-else-if="q.type === 2">
            {{ q.__id }}
            <MultipleChoiceQuestion
              @submitQuestion="this.updateQuestionList"
              :user_id="this.user"
              :test_group="this.newCol_id"
              :q_index="index"
            />
            <div
              class="del-q"
              v-if="q.__id !== ''"
              @click="deleteQuestion(index, q.__id)"
            >
              delete
            </div>
          </div>
          <div v-else-if="q.type === 3">
            <span>Yes/No</span> {{ q.__id }}
            <TrueFalseQuestion
              :user_id="this.user"
              :test_group="this.newCol_id"
              @submitQuestion="this.updateQuestionList"
              :q_index="index"
            />
            <div
              class="del-q"
              v-if="q.__id !== ''"
              @click="deleteQuestion(index, q.__id)"
            >
              delete
            </div>
          </div>
          <div v-else-if="q.type === 4">
            <span>writing question</span> {{ q.__id }}
            <WritingQuestion
              :user_id="this.user"
              :test_group="this.newCol_id"
              @submitQuestion="this.updateQuestionList"
              :q_index="index"
            />
          </div>
        </div>
        <div v-if="show_question_types">
          <!-- <span>Questions are shown</span> -->
          <QuestionTypeMenu @setQuestionType="setNewQuestionType" />
          <div
            v-if="question_list.length > 0"
            class="submit_but"
            @click="moveToQuestions('Questions', this.user, this.newCol_id)"
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.col {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background-color: #eee;
  margin: 5px 0;
  border: 1px solid black;
}

.col span:first-child {
  position: absolute;
  left: 10px;
  top: 50px;
}
.button1 {
  width: 100px;
  margin: 20px auto;
  text-align: center;
  background-color: black;
  color: white;
}

.red {
  color: red;
  background-color: darkgray;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: normal;
  cursor: pointer;
}

.flex1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  gap: 10px;
  margin: 20px auto;
  background-color: rgba(248, 248, 244, 0.545);
}

.flex1 div {
  position: relative;
  width: 150px;
  height: 150px;
  /* margin-top: 20px ; */
  /* line-height: 150px; */
  /* margin: 10px auto; */
}

.flex1 div span.red {
  position: absolute;
  transform: translate(-50%, -50%);
  top: calc(100% - 10px);
  left: 50%;
}

.del-q {
  width: 40%;
  margin: 2px auto;
  text-align: center;
  color: white;
  background-color: red;
}

.submit_but {
  width: 40%;
  margin: 2px auto;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #000;
}
</style>
