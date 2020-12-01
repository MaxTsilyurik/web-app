<template>
  <v-app>
    <v-container :is="layout" class="v-main grey lighten-3" data-booted="true" style="padding: 20px">
        <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import user from "@/components/users/user";
export default {
  components:{
    user
  },
  computed: {
    layout() {
        return this.$route.meta.layout || "default-layout"
    }
  }
}
</script>

