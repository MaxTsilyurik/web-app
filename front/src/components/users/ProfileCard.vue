<template>
  <v-card
      class="my-5"
      max-width="703px"
      style="margin: auto; padding: 10px; border-radius: 2px"
  >
    <v-img
        height="100%"
        style="background-image: linear-gradient(5deg, #13547a 50%, #80d0c7 150%); "
    >
      <v-row
          align="end"
          class="fill-height"
      >
        <v-col
            align-self="start"
            class="pa-0"
            cols="12"
        >
        </v-col>
        <v-col class="py-0">
          <v-list-item
              color="rgba(0, 0, 0, .4)"
              dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ user.firstName }} {{ user.secondName }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <p>Пол: {{ user.gender }}</p>
                <p>email: {{ user.username }}</p>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "ProfileCard",
  props: ['user'],
  data() {
    return {}
  },
  methods: {
    logout() {
      localStorage.clear();
    }
  }
}
</script>

<style scoped>

</style>