<template>
  <v-layout row>
    <v-text-field
        class="mx-4"
        placeholder="Что нового?"
        v-model="text"
        style="max-width: 700px"
        readonly
    />
  </v-layout>
</template>

<script>
export default {
  name: "PostForm"
}
</script>

<style scoped>

</style>