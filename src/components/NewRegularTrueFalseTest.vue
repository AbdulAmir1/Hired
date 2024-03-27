<script>
export default {
  name: 'NewRegularTrueFalseTest',
  components: {},
  props: ['msg', 'obj1', 'header'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ title: '', selections: [], currentText: '', count: 0 }),

  methods: {
    setTitle(e) {
      this.title = e.target.value
    },
    add() {
      this.count++
      this.selections.push({ option: this.currentText })
      console.log('added. ==>', this.selections)
      for (let i = 0; i < this.selections.length; i++) {
        console.log(this.selections[i].option)
      }
    },
    hideWallets() {},
    moveTo(url) {
      this.$router.push(url)
    },
    handleSubmit(e) {
      e.preventDefault()
      console.log('submiting ', this.selections)
    },
    handleChange(e) {
      this.currentText = e.target.value
    }
  },
  mounted: function () {}
}
</script>
<template>
  <h2>New True False Test</h2>
  <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
  <form @submit="handleSubmit">
    <label for="question">Quesion</label>
    <input type="text" @input="setTitle" />
    <div v-if="count < 2">
      <div>
        <input type="text" class="option" @input="handleChange" />&nbsp;<span
          @click="add"
          >+</span
        >&nbsp;<span>x</span>
      </div>
    </div>
    <button type="submit">submit</button>
  </form>
  <div>
    <div>{{ title }}</div>
    <div v-for="selection of this.selections">
      <input type="radio" name="singleSelTest" value="selection.option" />
      {{ selection.option }}
    </div>
  </div>
</template>
<style scoped></style>
