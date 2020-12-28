<template>
  <v-layout row>
    <v-text-field
        style="margin-left: 10px; padding: 5px; max-width: 600px"
        label="Добавить комментарий"
        v-model="text"
        @keyup.enter="save"
    />
    <v-btn
        color="primary"
        type="submit"
        small
        @click="save">
      Добавить
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  name: "CommentForm",
  props: ['postId'],
  data() {
    return {
      text: ''
    }
  },
  methods: {
    save() {
      if (this.text.length > 0) {
        const result = {
          id: null,
          comment: this.text,
          messageId: this.postId
        }
        let str = localStorage.getItem('access_token')
            .substr(1,localStorage.getItem('access_token').length-2)
        this.$http.post(`/api/v1/comments`, result,{
          headers: {
            'Authorization': 'Bearer ' + str,
          }, baseURL: 'http://localhost:8080',
        },)
            .then((response) => {
              console.log(response.data)
            })
        location.reload()
      }
    }
  }
}
</script>

<style scoped>

</style>