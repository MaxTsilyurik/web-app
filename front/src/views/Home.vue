<template>
  <v-container>
    <v-row v-if="isOAuth()">
      <v-col class="col col-2 navigable my-5">
        <Navigable></Navigable>
      </v-col>
      <v-col class="col">
        <PostForm></PostForm>
        <div v-for="(item, index) in items" :key="index">
          <PostCart v-bind:post="item"></PostCart>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostCart from "@/components/posts/PostCart";
import PostForm from "@/components/posts/PostForm";
import Navigable from "@/components/navigable/Navigable";
import User from "@/components/users/user";
import router from "@/route";

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
          id: 1,
          message: 'Hello world',
          like: 220
        },
        {
          user: {
            name: 'Alex',
            secondName: 'Alex'
          },
          id: 2,
          message: 'Hello world',
          like: 129
        },
        {
          user: {
            name: 'Wycc',
            secondName: 'Maxim'
          },
          id: 3,
          message: 'Новое видосик',
          like: 11
        },
        {
          user: {
            id: 1,
            name: 'Цилюрик',
            secondName: 'Максим'
          },
          id: 4,
          message: 'Мне не нравится JavaScript',
          like: 11
        },
      ],
      userLogin: User
    }
  },
  components: {
    Navigable,
    PostForm,
    PostCart,
  },

  methods: {
    logout() {
      localStorage.clear()
      console.log(localStorage.getItem('user_id'))
    },
    isOAuth() {
      if (localStorage.getItem('user_id') == null){
        router.push({name: 'Login'})
      }
        return true
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