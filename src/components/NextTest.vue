<script>
export default {
  name: 'NextTest',
  components: {},

  props: ['user_id', 'test_collection_Id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ tests: [] }),

  methods: {
    viewState() {
      console.log('current state is :', this.tests)
    },
    handleUserAnswer(e, test_id, type, value) {
      // console.log('looking for ', test_id)
      // const test = this.tests.find((test) => (test.__id = test_id))
      let test = null
      // const test2 = this.tests[0]
      for (let i = 0; i < this.tests.length; i++) {
        if (this.tests[i].__id === test_id) {
          // console.log('found===>', this.tests[i])
          test = this.tests[i]
          break
        }
      }
      // console.log(test)

      if (test) {
        console.log('test found--')
        if (test.type === 1) {
          // console.log(
          //   'this is a regular single selection test, you select =>',
          //   value
          // )
          test.user_answer = [value]
        } else if (test.type === 2) {
          // console.log(
          //   'this is a regular multiple selection test, control checked is ',
          //   e.target.checked
          // )

          if (e.target.checked) {
            test.user_answer.push(value)
          } else {
            // console.log(value, ' un-selected.')
            test.user_answer = test.user_answer.filter((val) => val !== value)
          }
        }
      } else {
        console.log('test is not found!')
      }
    },
    handleChange(e, test_id) {
      let test = null
      for (let i = 0; i < this.tests.length; i++) {
        if (this.tests[i].__id === test_id) {
          // console.log('found===>', this.tests[i])
          test = this.tests[i]
          break
        }
      }

      if (test) {
        test.user_answer = e.target.value
      }
    }
  },
  mounted: function () {
    const current_elems = [
      {
        __id: '223',
        type: 1,
        title: 'Which option is correct ?',
        options: ['1 - option1', '2 - option2', '3 - option3', '4 - option4']
      },
      {
        __id: '353',
        type: 2,
        title: 'Select the right options.',
        options: [
          '1 - multi sel option1',
          '2 - multi sel option2',
          '3 - multi sel option3',
          '4 -  multi sel option4'
        ]
      },
      {
        __id: '355',
        type: 4,
        title: 'Write your answer:'
      }
    ]

    const temp = []
    for (let i = 0; i < 3; i++) {
      if (current_elems[i].type < 4) {
        temp.push({ ...current_elems[i], user_answer: [] })
      } else if (current_elems[i].type === 4) {
        temp.push({ ...current_elems[i], user_answer: '' })
      }
    }
    console.log(temp)
    this.tests = new Object(temp)
  }
}
</script>
<template>
  <h3>NextTest.vue</h3>
  <h2>NextTest</h2>
  <div>
    <div class="questions" v-for="q in tests">
      <div>id:{{ q.__id }}</div>
      <span>type: {{ q.type }}</span>
      <div>
        {{ q.title }}
      </div>
      <div v-if="q.type === 1">
        <div v-for="(option, index) in q.options">
          <input
            type="radio"
            :name="q.__id"
            @input="(e) => handleUserAnswer(e, q.__id, q.type, index + 1)"
          />{{ index }}-- {{ option }}
        </div>
      </div>
      <div v-else-if="q.type === 2">
        <div v-for="(option, index) in q.options">
          <input
            type="checkbox"
            :name="q.__id"
            @input="(e) => handleUserAnswer(e, q.__id, q.type, index + 1)"
          />{{ index }}-- {{ option }}
        </div>
      </div>
      <div v-else-if="q.type === 3">
        <div v-for="(option, index) in q.options">
          <input
            type="checkbox"
            :name="q.__id"
            @input="(e) => handleUserAnswer(e, q.__id, q.type, index + 1)"
          />{{ index }}-- {{ option }}
        </div>
      </div>
      <div v-else-if="q.type === 4">
        <textarea
          :name="q.__id"
          id=""
          cols="30"
          rows="10"
          @input="(e) => handleChange(e, q.__id)"
        ></textarea>
      </div>
    </div>
  </div>

  <button @click="viewState">Show state</button>
</template>
<style scoped></style>
