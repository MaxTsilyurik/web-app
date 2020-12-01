<template>
  <v-layout row>
    <v-text-field
        label="Что нового?"
        placeholder="Write something"
        v-model="text"
    />
    <v-btn @click="save">
      Save
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  name: "PostForm"
}
</script>

<style scoped>

</style>