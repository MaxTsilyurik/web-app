<template>
  <v-container>
    <v-row v-if="isOAuth()">
      <v-col class="col col-2 navigable my-5">
        <Navigable></Navigable>
      </v-col>
      <v-col class="col">
        <ProfileCard></ProfileCard>
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
import User from "@/components/users/user";
import Login from "@/views/Login";
import user from "@/components/users/user";
import router from "@/route";

export default {
  name: "Profile",
  components:{Navigable,ProfileCard, Login},

  data() {
    return {
      user: User
    }
  },
  created() {
    const id = this.$route.params.id
    console.log(id)

  },
  methods: {
    logout() {
      User.logout()
      //location.reload()
    },
    isOAuth() {
      console.log(user)
      if (!user.isAuth()) {
        router.push({name: 'Login', params: {}})
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