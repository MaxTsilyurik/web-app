<template>
  <v-container>
    <v-row v-if="userLogin.isAuth()">
        <v-col class="col col-2 navigable my-5">
          <Navigable></Navigable>
        </v-col>
        <v-col class="col">
          <PostForm></PostForm>
          <div v-for="(item, index) in items" :key="index">
            <PostCart v-bind:post="item"></PostCart>
          </div>

        </v-col>
    </v-row >
    <LoginLayout v-else>
      <Login/>
    </LoginLayout>
  </v-container>
</template>

<script>
import PostCart from "@/components/posts/PostCart";
import PostForm from "@/components/posts/PostForm";
import Navigable from "@/components/navigable/Navigable";
import User from "@/components/users/user";
import Login from "@/views/Login";

export default {
  name: "Home",

  data() {
    return {
      items: [
        {
          user: {
            name: 'Max',
            secondName: 'Maxim'
          },
          message: 'Hello world',
          like: 220
        },
        {
          user: {
            name: 'Alex',
            secondName: 'Alex'
          },
          message: 'Hello world',
          like: 129
        },
        {
          user: {
            name: 'Wycc',
            secondName: 'Maxim'
          },
          message: 'Новое видосик',
          like: 11
        },
        {
          user: {
            name: 'Цилюрик',
            secondName: 'Максим'
          },
          message: 'Мне не нравится JavaScript',
          like: 11
        },
      ],
      userLogin: User
    }
  },
  components: {
    Login,
    Navigable,
    PostForm,
    PostCart,
  },

  methods: {
    logout() {
      User.logout()
      //location.reload()
    }
  }
}
</script>

<style scoped>
.navigable {
  margin-right: 20px;
  margin-left: 80px;
}
</style>