<script>
export default {
  name: 'NewRegulaMultiTest',
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
    add(option) {
      this.options_count++
      this.new_test.options.push(this.cur_option)
    },
    handleSubmit(e) {
      e.preventDefault()
      console.log('submiting ', this.new_test)
    },
    handleChange(e) {
      this.cur_option = e.target.value
    },
    selectAnswer(i) {
      this.new_test.answers.push(i)
      const set = new Set(this.new_test.answers)
      this.new_test = { ...this.new_test, answers: [...set] }
    },
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {
    console.log('new multi choice test usr id: ', this.$route.params.user_id)
  }
}
</script>
<template>
  <h2>New Multi Select Test</h2>
  <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
  <div>
    <form @submit="handleSubmit">
      <div>
        <label for="question">Quesion</label>
        <input type="text" @input="setTitle" />
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
      <!-- <div>{{ title }}</div> -->
      <div v-for="(option, index) in this.new_test.options">
        <input
          type="checkbox"
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
