<template>
  <v-card
      class="my-5"
      max-width="703px"
      style="margin: auto; padding: 10px; border-radius: 2px"
  >
    <v-img
        height="100%"
        style="background-image: linear-gradient(5deg, #13547a 50%, #80d0c7 150%); "
    >
      <v-row
          align="end"
          class="fill-height"
      >
        <v-col
            align-self="start"
            class="pa-0"
            cols="12"
        >
          <div>
            <img class="b-avatar-img"
                 v-bind:src="user.image"
                 width="200"
                 height="200">
          </div>
        </v-col>
        <v-col class="py-0">
          <v-list-item
              color="rgba(0, 0, 0, .4)"
              dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                {{user.name}} {{user.secondName}}
              </v-list-item-title>
              <v-list-item-subtitle >
                <p>Возраст: {{user.age}}</p>
                <p>Пол: {{user.gender}}</p>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
import User from "./user"
export default {
name: "ProfileCard",
  data() {
    console.log(User.isAuth())
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