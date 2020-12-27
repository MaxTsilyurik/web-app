<template>
  <v-container v-if="isOAuth()">
    <form class="form-login" @submit.prevent = "submit">
      <h3 class="text-center">Авторизация</h3>
      <v-text-field
          v-model="email"
          :rules="emailRules"
          :error-messages="errors.email"
          label="E-mail"
          required
      ></v-text-field>
      <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Пароль"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
      ></v-text-field>
      <v-card-actions>
        <v-btn
            style="position: relative;
                left: 50%;
                transform: translate(-50%, 0);"
            color="primary"
            type="submit"
            text
        >
          Войти
        </v-btn>
      </v-card-actions>
      <p class="mt-5 mb-3 text-muted text-center">
        <router-link v-bind:to="{name: 'Register'}">
          Нет аккаунта?
        </router-link>
      </p>

      <p class="mt-5 mb-3 text-muted text-center">&copy; telegraph 2020</p>

    </form>
  </v-container>
</template>

<script>
import querystring from "querystring";

export default {
  name: "Login",

  data() {
    return {
      show1: false,
      email: '',
      password: '',
      rules: {
        min: v => v.length >= 8 || 'Min 8 characters',
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      errors: {}
    }
  },
  methods: {
    submit() {
      if (this.validate()) {
        const formData = {
          username: this.email,
          password: this.password,
          grant_type: 'password'
        };
        this.$http.post('/oauth/token', querystring.stringify(formData), {
          headers: {
            'authorization': 'Basic dWk6bXJJVG1ndnpSWE9a',
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/x-www-form-urlencoded',
            "cache-control": "no-cache"
          }, baseURL: 'http://localhost:8080/',
        })
            .then((response) => {
              console.log(response.data)
              localStorage.setItem('access_token', JSON.stringify(response.data.access_token))
              localStorage.setItem('user_id', JSON.stringify(response.data.user_id))
              this.$router.push({name: 'Home'})
            })
            .catch((error) => console.log(error))
      }
    },
    validate() {
      this.errors = {}
      if (this.email.trim().length === 0) {
        this.errors.email = 'Заполните Email.'
      }
      if (this.password.trim().length === 0) {
        this.errors.password = 'Заполните Пароль.'
      }
      return Object.keys(this.errors).length === 0
    },
    isOAuth() {
      console.log(localStorage.getItem('user_id'))
       if (localStorage.getItem('user_id') == null){
         return true
       }else return false
    }
  },


}
</script>

<style scoped>
.form-login {
  /*background-color: white;*/
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: auto;
  /*border-radius: 15px;*/
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

</style>