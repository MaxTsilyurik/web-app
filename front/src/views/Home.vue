<template>
    <v-container>
      <v-row>
        <v-col class="col col-2 navigable my-5">
          <div class="v-sheet theme--light rounded-lg">
            <div role="list" class="v-list v-sheet theme--light transparent">
              <div tabindex="0" role="listitem" class="v-list-item v-list-item--link theme--light">
                <div class="v-list-item__content">
                  <div class="v-list-item__title"> Моя страница</div>
                </div>
              </div>
              <div tabindex="0" role="listitem" class="v-list-item v-list-item--link theme--light">
                <div class="v-list-item__content">
                  <div class="v-list-item__title"> Сообщения</div>
                </div>
              </div>
              <div tabindex="0" role="listitem" class="v-list-item v-list-item--link theme--light">
                <div class="v-list-item__content">
                  <div class="v-list-item__title">Друзья</div>
                </div>
              </div>
              <div tabindex="0" role="listitem" class="v-list-item v-list-item--link theme--light">
                <div class="v-list-item__content">
                  <div class="v-list-item__title"> Группы</div>
                </div>
              </div>
              <hr role="separator" aria-orientation="horizontal" class="my-2 v-divider theme--light">
              <div tabindex="0" role="listitem"
                   class="v-list-item v-list-item--link theme--light grey--text text--lighten-4">
                <div class="v-list-item__content">
                  <router-link v-bind:to="{name: 'Messages'}">
                    <div class="v-list-item__title"> Выход</div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col class="col">
          <PostCart></PostCart>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import PostCart from "@/components/posts/PostCart";

export default {
  name: "Home",

  components: {
    PostCart,
  },
}
</script>

<style scoped>
.navigable {
  margin-right: 20px;
  margin-left: 80px;
}
</style>