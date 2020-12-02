<template>
  <v-container class="default-layout">
      <header>
        <v-card tile class="overflow-hidden">
          <v-main>
            <v-app-bar dense
                       fixed
                       class="custom_nav_bar">

              <v-toolbar-title style="cursor: pointer; color:white;">
                <router-link style="color: white" v-bind:to="{name:'Home'}">
                  Telegraph
                </router-link>

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

      <v-main  class="v-main grey lighten-3" data-booted="true" style="padding: 20px">
        <slot/>
      </v-main>

  </v-container>
</template>

<script>
export default {
  name: "default-layout"
}
</script>

<style scoped>
.custom_nav_bar {
  background-image: linear-gradient(5deg, #13547a 50%, #80d0c7 150%);
}
</style>