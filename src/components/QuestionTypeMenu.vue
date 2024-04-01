<script>
export default {
  name: 'QuestionTypeMenu',
  components: {},
  props: ['user_id'],
  emits: ['setQuestionType'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {
    setType(type) {
      this.$emit('setQuestionType', type)
    }
  },
  mounted: function () {}
}
</script>
<template>
  <div class="questionMenu">
    <div @click="setType(1)" class="selection">New Single Selection</div>
    <div @click="setType(2)" class="selection">New Multiple Selection</div>
    <div @click="setType(3)" class="selection">New True or False</div>
    <div @click="setType(4)" class="selection">New Writing Question</div>
  </div>
</template>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.questionMenu {
  font-family: Arial, Helvetica, sans-serif;
  width: 30%;
  margin: 10px auto;
  margin-bottom: 3px;
  text-align: center;
}

.questionMenu div {
  margin-bottom: 3px;
}

.selection:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
