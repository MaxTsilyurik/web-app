<template>
  <v-row class="shrink">
    <v-text-field
        class="mx-4"
        placeholder="Что нового?"
        v-model="text"
        style="max-width: 700px"
        @click="expand = !expand"
    />
    <v-expand-transition>
      <v-card
          v-show="expand"
          height="110px"
          width="700px"
          class="mx-4"
      >
        <v-file-input
            class="mx-6"
            counter
            multiple
            width="690px"
        ></v-file-input>
        <v-btn
            style="position: relative;
                left: 50%;
                transform: translate(-50%, 0);"
            color="primary"
            type="submit"
            text
            @click="submit"
        >
          Отправить
        </v-btn>
      </v-card>
    </v-expand-transition>
  </v-row>

</template>

<script>
export default {
  name: "PostForm",
  data (){
    return {
      expand: false
    }
  }
}
</script>

<style scoped>

</style>