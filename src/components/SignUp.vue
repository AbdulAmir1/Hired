<script>
import axios from 'axios'
// import { getTestsForUser } from '../services/api'
import BASEURL from '../../config'

export default {
  name: 'SignUp',
  components: {},
  props: [],
  // Or props: ["msg", "name", ...etc.] ,
  data: () => ({
    user: { name: '', email: '', password: '', confirmed_password: '' },
    showErr: false,
    errorMessage: '',
    user_id: ''
  }),

  methods: {
    isValidCredentials() {
      if (this.user.name === '') {
        this.errorMessage = 'Name is missing'
        console.log(this.user, ' name is blank --> ', this.errorMessage)
      } else if (this.user.email === '') {
        this.errorMessage = 'Email is required'
        console.log('email is blank ', this.user.errorMessage)
        // this.user.errorMessage = 'Email is missing'
      } else if (this.user.password === '') {
        this.errorMessage = 'Password is required'
        console.log('pass blank ', this.user.errorMessage)
        // this.user.errorMessage = 'Email is missing'
      } else if (
        String(this.user.email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) === false
      ) {
        // this.user.errorMessage = 'Email is not valid'
        this.errorMessage = 'Email is not valid'
        console.log('email not valid', this.user.errorMessage)
      } else if (this.user.password !== this.user.confirmed_password) {
        this.errorMessage = 'passwords misatched'
        console.log('pass error', this.errorMessage)
      } else {
        return true
      }

      console.log('validation error =>', this.errorMessage)
      return false
    },
    async handleSubmit(e) {
      e.preventDefault()
      if (this.isValidCredentials()) {
        await axios
          .post(`${BASEURL}/users/signup`, {
            name: this.user.name,
            email: this.user.email,
            password: this.user.password,
            is_creater: false
          })
          .then((response) => {
            if (response.data !== '') {
              this.user_id = response.data._id
            } else {
              // this.goRegister = true
              this.errorMessage = 'error'
              this.showErr = true
            }
            // this.new_test_id = response.data._id
            console.log('response is ---> ', response)
          })
      } else {
        // this.errorMessage = 'error'
        console.log('error =>', this.errorMessage, 'state---> ', this.user)
        this.showErr = true
      }
      // console.log('user data creds. :', this.user)
    },
    handleChange(e) {
      this.user[e.target.name] = e.target.value
    }
  },
  mounted: function () {}
}
</script>
<template>
  <div>
    <div class="signUp">
      <form @submit="(e) => handleSubmit(e)">
        <div>
          <span>Your Name</span
          ><input type="text" name="name" @input="(e) => handleChange(e)" />
        </div>
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
        <div>
          <span>Confirm Password</span
          ><input
            type="password"
            name="confirmed_password"
            @input="(e) => handleChange(e)"
          />
        </div>
        <div class="error" v-if="showErr">{{ errorMessage }}</div>
        <div><button type="submit">Sign Up</button></div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.error {
  width: 200px;
  height: 90px;
  border: 1px solid blue;
  color: red;
}

div.signUp {
  background-color: rgb(205, 205, 198);
  width: 30%;
  height: 100px;
  padding: 7px;
  margin: 100px auto;
  border: 1px solid #000;
}

div.signUp > div {
  /* margin: 20px 5px; */
  clear: both;
}

/* div.signUp div input[type='email'],
input[type='password'],
input[type='text'] {
  background-color: aquamarine;
  float: right;
  margin-right: 5px; 
}*/
</style>
