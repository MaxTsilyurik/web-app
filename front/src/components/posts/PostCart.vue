<template>
  <v-card
      class="my-5"
      color="white"
      max-width="703px"
      style="border-radius: 2px"
  >
    <v-card-title>
      <v-icon
          large
          left
          class="material-icons"
          STYLE="color: #13547a"
      >
        near_me
      </v-icon>
      <span class="title" style="color: black">Telegraph</span>
    </v-card-title>

    <v-card-text class="headline" style="color: black">
      {{post.message}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">

        <v-list-item-content>
          <v-list-item-title style="color: black" v-on:click="toProfile(post.user.id)">{{post.user.name }} {{post.user.secondName}}</v-list-item-title>
        </v-list-item-content>

        <v-row
            align="center"
            justify="end"
        >
          <v-btn icon @click="del" small>
            <v-icon>delete</v-icon>
          </v-btn>
          <span class="mr-1">·</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
    <CommentsList
        :comments="post.comments"
        :postId = "post.id"
    ></CommentsList>
  </v-card>
</template>

<script>

import CommentsList from "@/components/posts/CommentsList";
import router from "@/route";

export default {
  name: "PostCart",
  components: { CommentsList },
  props: ['post'],
  methods:{
    toProfile(userId) {
      router.push({name: 'User', params: {id: userId}})
    }
  }
}
</script>

<style scoped>

</style>