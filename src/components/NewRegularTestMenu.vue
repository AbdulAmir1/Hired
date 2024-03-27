<script>
export default {
  name: 'NewRegularTestMenu',
  components: {},
  props: ['msg', 'obj1', 'header', 'usr_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {
    showWallets() {},
    hideWallets() {},
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {
    console.log('Reg test menu user id => ', this.usr_id)
  }
}
</script>
<template>
  <h2>New Regular Test Menu</h2>
  <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
  <div @click="moveTo('/regular_test/single_select/' + this.usr_id)">
    Single-Select
  </div>
  <div @click="moveTo('/regular_test/multi_select/' + this.usr_id)">
    Multi-Select
  </div>
  <div @click="moveTo('/regular_test/true_false/' + this.usr_id)">
    True or False
  </div>
</template>
<style scoped></style>
