<script>
export default {
  name: 'SignIn',
  components: {
    MyComponent
  },
  props: ['user_id'],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({ heading: '' }),

  methods: {},
  mounted: function () {}
}
</script>
<template>
  <h2>App</h2>
</template>
<style scoped></style>
