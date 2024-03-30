<script>
import axios from 'axios'
// import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'

export default {
  name: 'SignIn',
  components: {},
  props: [],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({
    user: { email: '', password: '' },
    user_id: '',
    goRegister: false
  }),

  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      await axios
        .post(`${BASEURL}/users/signin`, {
          email: this.user.email,
          password: this.user.password
        })
        .then((response) => {
          if (response.data !== '') {
            this.user_id = response.data._id
            this.moveTo(`Home`, this.user_id)
          } else {
            this.goRegister = true
          }
          // this.new_test_id = response.data._id
          console.log('response is ---> ', response)
        })
      // console.log('user data creds. :', this.user)
    },
    handleChange(e) {
      // console.log(e.target.name)
      this.user[e.target.name] = e.target.value
    },
    moveTo(url, param) {
      this.$router.push({ name: url, params: { user_id: param } })
    }
  },
  mounted: function () {}
}
</script>
<template>
  <div>
    <h2>Sign In</h2>
    <h3>SignIn.vue</h3>
    <div class="signIn">
      <form @submit="(e) => handleSubmit(e)">
        <div>
          <span>Email</span
          ><input type="email" name="email" @input="(e) => handleChange(e)" />
        </div>
        <div>
          <span>Password</span
          ><input
            type="password"
            name="password"
            @input="(e) => handleChange(e)"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div v-if="goRegister" @click="moveTo('/user/signup')">register</div>
    </div>
  </div>
</template>
<style scoped></style>
