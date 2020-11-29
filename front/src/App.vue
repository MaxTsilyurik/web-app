<template>
  <v-app>
    <header>
      <v-card tile class="overflow-hidden">
        <v-main>
          <v-app-bar dense
                     fixed
                     class="custom_nav_bar">

            <v-toolbar-title style="cursor: pointer; color:white;">
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
        </v-main>
      </v-card>
    </header>
    <v-content class="v-main grey lighten-3" data-booted="true" style="padding: 20px">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

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