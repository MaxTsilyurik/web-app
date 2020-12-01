<template>
  <v-container>
    <form class="form-login">
      <h3 class="text-center">Регистрация</h3>
      <v-text-field
          ref="name"
          v-model="name"
          :rules="[() => !!name || 'This field is required']"
          :error-messages="errors.name"
          label="Имя"
          required
      ></v-text-field>
      <v-text-field
          ref="name"
          v-model="name"
          :rules="[() => !!name || 'This field is required']"
          :error-messages="errors.secondName"
          label="Фамилия"
          required
      ></v-text-field>
      <v-select
          v-model="select"
          :items="gender"
          :error-messages="errors.select"
          label="Пол"
          required
      ></v-select>
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
            text
            @click="submit"
        >
          Регистрация
        </v-btn>
      </v-card-actions>
      <p class="mt-5 mb-3 text-muted text-center">&copy; telegraph 2020</p>

    </form>
  </v-container>
</template>

<script>
import User from '@/components/users/user'

export default {
  name: "Register",

  data() {
    return {
      show1: false,
      name: '',
      secondName: '',
      email: '',
      password: '',
      errors: {},
      rules: {
        min: v => v.length >= 8 || 'Min 8 characters',
      },
      gender: [
        'Мужской',
        'Женский'
      ],
      checkbox: null,
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
.form-login{
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