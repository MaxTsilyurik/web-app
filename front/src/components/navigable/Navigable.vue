<template>
  <div class="v-sheet">
    <div role="list" class="v-list v-sheet theme--light transparent">
      <div tabindex="0" role="listitem" class="v-list-item v-list-item--link theme--light" v-on:click="toProfile(user.id)">
        <div class="v-list-item__content">
          <div class="v-list-item__title"> Моя страница</div>
        </div>
      </div>
      <div tabindex="0" role="listitem" class="v-list-item v-list-item--link theme--light" v-on:click="toNews">
        <div class="v-list-item__content">
          <div class="v-list-item__title">Новости</div>
        </div>
      </div>
<!--      <div tabindex="0" role="listitem" class="v-list-item v-list-item&#45;&#45;link theme&#45;&#45;light">
        <div class="v-list-item__content">
          <div class="v-list-item__title">Друзья</div>
        </div>
      </div>-->
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
import UserAuth from "@/components/users/user";
import router from "@/route";

export default {
  name: "Navigable",
  data() {
    return {
      user: UserAuth
    }
  },
  methods: {
    logout() {
      UserAuth.logout()
      //location.reload()
    },
    toNews() {
      router.push({name: 'Home', params: {}})
    },
    toProfile(userId) {
      router.push({name: 'User', params: {id: userId}})
    }
  }
}
</script>

<style scoped>

</style>