<script>
export default {
  name: 'NewRegularTrueFalseTest',
  components: {},
  props: ['msg', 'obj1', 'header'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({
    options_count: 0,
    cur_option: 1,
    new_test: { title: '', type: 2, options: [], answers: [] }
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
    handleSubmit(e) {
      e.preventDefault()
      console.log('submiting ', this.new_test)
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
    console.log('new t/f test usr id: ', this.$route.params.user_id)
    // this.id = this.user_id
  }
}
</script>
<template>
  <h2>New True False Test</h2>
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
