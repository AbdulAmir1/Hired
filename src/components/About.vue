<script>
export default {
  name: 'About',
  components: {},
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {},
  mounted: function () {}
}
</script>
<template>
  <div>
    <h2>About</h2>
    <div>
      The website serves as a pre-employment screening tool to view a
      candidate's qualifications, and skills in a results-driven format.
    </div>
  </div>
</template>
<style scoped>
div {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
}
</style>
