<template>
  <v-list two-line>
    <v-subheader>
      Комментарии
    </v-subheader>

    <template
        v-for="(item, index) in comments"
    >
      <v-divider
          v-if="index > 0"
          :key="index"
      ></v-divider>

      <CommentItem
          :comment="item"
          :postId = "postId"
          :key="'item' + index"
      ></CommentItem>
    </template>

    <CommentForm :post-id="postId"></CommentForm>
  </v-list>
</template>

<script>
import CommentForm from "@/components/posts/CommentForm";
import CommentItem from "@/components/posts/Comment";

export default {
  name: "CommentsList",
  components: {CommentForm, CommentItem},
  props: ['comments', 'postId']
}
</script>

<style scoped>

</style>