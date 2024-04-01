<script>
// import TestCollection from './TestCollection.vue'f
import axios from 'axios'
import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'
export default {
  name: 'TestMenu',
  components: {},
  props: ['user_id'],
  emits: ['addTitle', 'hideNewTestCollectionNameBox'],

  // Or props: [ "name", ...etc.] ,
  data: () => ({ title: '' }),

  methods: {
    async addTitle(e) {
      console.log('title is ', this.title)
      this.$emit('addTitle', this.title)
    },
    handleChange(e) {
      this.title = e.target.value
      // console.log(this.title)
    },
    cancel() {
      this.$emit('hideNewTestCollectionNameBox')
    }
  },
  mounted: function () {
    console.log('new col box shon')
  }
}
</script>
<template>
  <div class="title-box">
    <!-- <div>Title</div> -->
    <div>
      <input
        type="text"
        placeholder="add title"
        @input="(e) => handleChange(e)"
      />
    </div>
    <div class="buttons">
      <button @click="addTitle">Ok</button>
      <button @click="cancel">cancel</button>
    </div>
  </div>
</template>
<style scoped>
.title-box {
  width: 200px;
  height: 100px;
  margin: 100px auto;
  padding: 5px 3px;
  background-color: #eee;
  border: 1px solid #000;
}

.title-box input[type='text'] {
  display: block;
  width: calc(100% - 10px);
  height: fit-content;
  margin: 10px auto;
}

.buttons {
  width: fit-content;
  margin: 30px auto;
}
</style>
