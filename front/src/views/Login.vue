<template>
  <form class="form-login">
    <h3 class="text-center">Авторизация</h3>
    <v-text-field
        v-model="email"
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
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
    ></v-text-field>
    <v-btn
        style="position: relative;
                left: 50%;
                transform: translate(-50%, 0);"
        class="mr-4"
        @click="submit"
    >
      Войти
    </v-btn>
    <p class="mt-5 mb-3 text-muted text-center">
      <router-link  to="">
        Нет аккаунта?
      </router-link>
    </p>

    <p class="mt-5 mb-3 text-muted text-center">&copy; telegraph 2020</p>

  </form>
</template>

<script>
import User from '@/components/users/user'

export default {
  name: "Login",

  data() {
    return {
      show1: false,
      email: '',
      password: '',
      errors: {},
      rules: {
        min: v => v.length >= 8 || 'Min 8 characters',
      },
    }
  },
  methods: {
    submit(e) {
      if (this.validate()) {
        const result = {
          name: 'Иван Иванов',
          email: 'ivan@ya.ru',
          accessToken: 'jsdlf732649823709!ew98r#$432'
        }
        User.login(result)
      }
      e.preventDefault()
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
    }
  }
}
</script>

<style scoped>
.form-login {
  background-color: white;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: auto;
  border-radius: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>