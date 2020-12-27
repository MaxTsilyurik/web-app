<template>
  <v-container >
    <form class="form-login">
      <h3 class="text-center">Регистрация</h3>
      <v-text-field
          ref="name"
          v-model="formName"
          :rules="[() => !!formName || 'Имя должно быть заполнено']"
          :error-messages="errors.name"
          label="Имя"
          required
      ></v-text-field>
      <v-text-field
          ref="name"
          v-model="formSecondName"
          :rules="[() => !!formSecondName || 'Фамилия должна быть заполена']"
          :error-messages="errors.secondName"
          label="Фамилия"
          required
      ></v-text-field>
      <v-select
          v-model="formGender"
          :items="genders"
          :error-messages="errors.select"
          label="Пол"
          required
      ></v-select>
      <v-text-field
          v-model="formEmail"
          :rules="emailRules"
          :error-messages="errors.email"
          label="E-mail"
          required
      ></v-text-field>
      <v-text-field
          v-model="formPassword"
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
import router from "@/route";

export default {
  name: "Register",

  data() {
    return {
      user: User,
      show1: false,
      formName: '',
      formSecondName: '',
      formEmail: '',
      formPassword: '',
      errors: {},
      rules: {
        min: v => v.length >= 8 || 'Min 8 characters',
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      genders: [
        'Мужской',
        'Женский'
      ],
      formGender: ''
    }
  },
  methods: {
    submit() {
      const result = {
        id: null,
        firstName: this.formName,
        secondName: this.formSecondName,
        patronymic: '',
        authority: 'USER',
        username: this.formEmail,
        gender: this.formGender,
        password: this.formPassword,
        accessToken: 'jsdlf732649823709!ew98r#$432'
      }
      User.login(result)
      console.log(result)
    },
    isOAuth(){
      if (!this.user.isAuth()){
        router.push({name: 'Home', params: {}})
      }

    }
  }
}
</script>

<style scoped>
.form-login {
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

</style>