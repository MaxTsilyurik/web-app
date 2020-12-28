<template>
  <v-row class="shrink">
    <v-text-field
        class="mx-4"
        placeholder="Что нового?"
        style="max-width: 700px"
        readonly
        @click="expandMethods"
    />
    <v-expand-transition>
      <v-card
          v-show="expand"
          height="auto"
          width="700px"
          class="mx-4"
      >
        <v-textarea
            color="teal"
            style="padding: 10px; margin: 10px"
            v-model="msg"
            autofocus
            @keyup.enter.exact="createMessages"
            @keydown.enter.shift.exact="newline"
        >
          <template v-slot:label>
            <div>
              Сообщение
            </div>
          </template>
        </v-textarea>
        <v-btn
            style="position: relative;
                left: 50%;
                transform: translate(-50%, 0);
                padding: 10px; margin-bottom: 10px"
            color="primary"
            type="submit"
            text
            @click.prevent="createMessages">
          Отправить
        </v-btn>
      </v-card>
    </v-expand-transition>
  </v-row>

</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      msg: '',
      expand: false
    }
  },
  methods: {
    expandMethods() {
      this.expand = !this.expand
      this.msg = ''
    },

    newline() {
    },
    createMessages() {
      if (this.msg !== '' || !this.msg.trim()) {
        const submissionData = {
          id: null,
          message: this.msg,
        }
        console.log(submissionData)

        let str = localStorage.getItem('access_token')
            .substr(1,localStorage.getItem('access_token').length-2)
        this.$http.post(`/api/v1/messages`, submissionData,{
          headers: {
            'Authorization': 'Bearer ' + str,
          }, baseURL: 'http://localhost:8080',
        },)
            .then((response) => {
              console.log(response.data)
            })
        location.reload()
        this.expandMethods()

      }
    },

  }
}
</script>

<style scoped>

</style>