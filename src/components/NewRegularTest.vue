<script>
import NewRegularTestMenu from './NewRegularTestMenu.vue'
export default {
  name: 'NewRegularTest',
  components: { NewRegularTestMenu },
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ title: '' }),

  methods: {
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {}
}
</script>
<template>
  <div>
    <h3>NewRegularTest.vue</h3>
    <NewRegularTestMenu
      :user_id="this.$route.params.user_id"
      :group_id="this.$route.params.group_id"
    />
  </div>
</template>
<style scoped></style>
