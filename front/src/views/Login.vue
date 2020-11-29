<template>
  <div class="login">
    <div class="row">
      <div class="col-md-5 m-auto">
        <h1>Авторизация</h1>
        <form @submit="signIn">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="email">
            <div class="error">{{errors.email}}</div>
          </div>
          <div class="form-group">
            <label for="password">Пароль</label>
            <input type="password" class="form-control" id="password" v-model="password">
            <div class="error">{{errors.password}}</div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-secondary">Войти</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      errors: {}
    }
  },
}
</script>