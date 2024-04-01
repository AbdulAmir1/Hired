<script>
export default {
  name: 'NewRegularTestMenu',
  components: {},
  props: ['user_id', 'group_id'],
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
    console.log('Reg test menu user id => ', this.user_id)
    console.log('Reg test menu group id => ', this.group_id)
  }
}
</script>
<template>
  <div>
    <h2>New Regular Test Menu</h2>
    <h3>NewRegularTestMenu.vue</h3>
    <!-- <div @click="moveTo('/regular_test/new')">New</div> -->
    <div
      @click="
        moveTo(
          '/regular_test/single_select/' +
            this.$route.params.user_id +
            '/' +
            this.group_id
        )
      "
    >
      Single-Select
    </div>
    <div
      @click="
        moveTo(
          '/regular_test/multi_select/' + this.user_id + '/' + this.group_id
        )
      "
    >
      Multi-Select
    </div>
    <div
      @click="
        moveTo('/regular_test/true_false/' + this.user_id + '/' + this.group_id)
      "
    >
      True or False
    </div>
  </div>
</template>
<style scoped></style>
