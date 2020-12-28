<template>
  <v-container>
    <v-row v-if="user.isOAuth()">
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
import User from "@/components/users/user"

export default {
  name: "Home",

  data() {
    return {
      user: User,
      items: null
    }
  },
  components: {
    Navigable,
    PostForm,
    PostCart,
  },
  created() {
    let str = localStorage.getItem('access_token')
        .substr(1, localStorage.getItem('access_token').length - 2)
    this.$http.get(`/api/v1/messages/`, {
      headers: {
        'Authorization': 'Bearer ' + str,
      }, baseURL: 'http://localhost:8080',
    })
        .then((response) => {
          console.log(response.data)
          this.items = {...response.data}
        })
    console.log(this.items)

  },
  methods: {
    logout() {
      this.user.logout()
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