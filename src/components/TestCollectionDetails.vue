<script>
import axios from 'axios'
import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'
export default {
  name: 'TestCollectionDetails',
  components: {},
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ testsCollectionDetails: null }),

  methods: {
    moveTo(url) {
      this.$router.push(url)
    },
    async getTestCollectionsDetails(testCol_id) {
      await axios
        .get(`${BASEURL}/tests_groups/${testCol_id}`)
        .then((response) => (this.testsCollectionDetails = response.data))
    },
    async deleteQuestion(e, id) {
      e.stopPropagation()
      await axios
        .delete(`${BASEURL}/tests/${id}`)
        .then((response) => console.log('deleted: : ', response.data))
    },
    test() {
      console.log('Test..')
      // moveTo(`/test_details/${test._id}`)
    }
  },
  async mounted() {
    console.log(
      'in TestCollectionDeatails id is :',
      this.$route.params.test_col_id
    )
    await this.getTestCollectionsDetails(this.$route.params.test_col_id)
    console.log('tests => ', this.testsCollectionDetails)
  }
}
</script>
<template>
  <h2>Test collection Details</h2>
  <h3>TestCollectionDetails.vue</h3>
  <div v-if="this.testsCollectionDetails">
    test collection title : {{ testsCollectionDetails.title }}
    <button
      @click="
        this.moveTo(
          `/regular_test/${this.$route.params.user_id}/${testsCollectionDetails._id}`
        )
      "
    >
      Add Tests
    </button>
    <div v-if="this.testsCollectionDetails.tests">
      <!-- <span>Tests Exists</span> -->
      <!-- tests count : {{ this.testsCollectionDetails.tests.length }} -->
      <div v-for="test in this.testsCollectionDetails.tests">
        <div class="cyan" @click="test()">
          <div class="pink">Question -- : {{ test.title }}</div>
          &nbsp;&nbsp;<span @click="deleteQuestion(e, test._id)">X</span>
        </div>
      </div>
    </div>

    <!-- <div v-for="collection in this.testsCollections.data">
      title :
      <span @click="viewTestCollection(collection._id)">{{
        collection.title
      }}</span>
    </div> -->
  </div>
</template>
<style scoped>
.cyan {
  background-color: cadetblue;
  margin: 5px 0;
  padding: 3px 0;
}

.pink {
  background-color: pink;
  margin: 5px 0;
}
</style>
