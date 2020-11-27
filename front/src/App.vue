<template>
  <v-app>
    <header>
      <v-card tile class="overflow-hidden">
        <v-content>
          <v-app-bar dense
                     fixed
                     class="custom_nav_bar">

            <v-toolbar-title style="cursor: pointer; color:white;" @click="$router.push('/')">
              Telegraph
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon color="white">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon color="white">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>
        </v-content>
      </v-card>
    </header>

    <v-main class="v-main grey lighten-3" data-booted="true" style="padding: 20px">
      <v-container>
        <v-row>
          <v-col class="col-sm-2 col-12">

          </v-col>
          <v-col class="col-sm-8 col-8">
            <PostCart></PostCart>
            <PostCart></PostCart>
            <PostCart></PostCart>
            <PostCart></PostCart>
            <PostCart></PostCart>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PostCart from "@/components/posts/PostCart";

export default {
  name: 'App',

  components: {
    PostCart
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.custom_nav_bar {
  background-image: linear-gradient(5deg, #13547a 50%, #80d0c7 150%);
}
</style>