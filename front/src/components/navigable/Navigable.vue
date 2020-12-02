<template>
  <div class="v-sheet rounded-lg">
    <div role="list" class="v-list v-sheet theme--light transparent">
      <div tabindex="0" role="listitem" class="v-list-item v-list-item--link theme--light">
        <div class="v-list-item__content">
          <router-link v-bind:to="{name: 'User', param:{url: user.id}}">
            <div class="v-list-item__title"> Моя страница</div>
          </router-link>
        </div>
      </div>
      <div tabindex="0" role="listitem" class="v-list-item v-list-item--link theme--light">
        <router-link v-bind:to="{name: 'Home', param:{}}">
          <div class="v-list-item__title"> Новости</div>
        </router-link>
      </div>
      <div tabindex="0" role="listitem" class="v-list-item v-list-item--link theme--light">
        <div class="v-list-item__content">
          <div class="v-list-item__title">Друзья</div>
        </div>
      </div>
      <hr role="separator" aria-orientation="horizontal" class="my-2 v-divider theme--light">
      <div tabindex="0" role="listitem"
           class="v-list-item v-list-item--link theme--light grey--text text--lighten-4">
        <div class="v-list-item__content">
          <span v-on:click="logout">
            <div class="v-list-item__title"> Выход</div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/components/users/user";

export default {
  name: "Navigable",
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