<template>
  <v-container>
    <v-row v-if="isOAuth()">
      <v-col class="col col-2 navigable my-5">
        <Navigable></Navigable>
      </v-col>
      <v-col class="col">
        <ProfileCard v-bind:user = "user"></ProfileCard>
      </v-col>
    </v-row>
    <LoginLayout v-else>
      <Login/>
    </LoginLayout>
  </v-container>
</template>

<script>
import ProfileCard from "@/components/users/ProfileCard";
import Navigable from "@/components/navigable/Navigable";
import Login from "@/views/Login";

export default {
  name: "Profile",
  components: {Navigable, ProfileCard, Login},

  data() {
    return {
      access_token: localStorage.getItem('access_token'),
      user: null
    }
  },
  created() {
    let id = this.$route.params.id
    console.log(this.access_token)
    let str = localStorage.getItem('access_token')
        .substr(1,localStorage.getItem('access_token').length-2)
    this.$http.get(`/api/v1/user/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + str,
      }, baseURL: 'http://localhost:8080',
    })
        .then((response) => {
          console.log(response.data)
          this.user = {...response.data}
          console.log(this.user)
        })

  },
  methods: {
    logout() {
      localStorage.clear()
      //location.reload()
    },
    isOAuth() {
      return localStorage.getItem('user_id') !== null;
    }
  },
}
</script>

<style scoped>
.navigable {
  margin-right: 20px;
  margin-left: 80px;
}

</style>