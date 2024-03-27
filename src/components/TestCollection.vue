<script>
export default {
  name: 'TestCollection',
  components: {},
  props: ['msg', 'obj1', 'header'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {
    moveTo(url) {
      this.$router.push(url)
    }
  },
  mounted: function () {}
}
</script>
<template>
  <h2>Test collection</h2>
</template>
<style scoped></style>
