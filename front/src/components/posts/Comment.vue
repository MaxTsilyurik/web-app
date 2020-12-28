<template>
  <v-list-tile>
    <v-list-tile-content>
      <v-list-item-title v-html="comment.author.firstName+' '+comment.author.secondName" v-on:click="toUser()"></v-list-item-title>
      <v-list-item-subtitle v-html="comment.comment"></v-list-item-subtitle>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
import router from "@/route";

export default {
  name: "Comment",
  props: ['comment'],
  data(){
    return  {
      user: null,
      userStore: ''
    }
  },
  methods:{
   toUser(){
     router.push({name: 'User', params: {id: this.comment.author.id}})
   },
    created() {

    }

  }
}
</script>

<style scoped>

</style>