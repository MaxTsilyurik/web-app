<template>
  <v-container>
    <v-row v-if="user.isAuth()">
      <v-col class="col col-2 navigable my-5">
        <Navigable></Navigable>
      </v-col>
      <v-col class="col">
        <ProfileCard/>
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

export default {
  name: "Profile",
  components:{Navigable,ProfileCard, Login},

  data() {
    return {
      user: User
    }
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

</style>