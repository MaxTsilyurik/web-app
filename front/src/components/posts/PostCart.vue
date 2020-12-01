<template>
  <v-card
      class="my-5"
      color="white"
      dark
      max-width="700px"
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
      "Turns out semicolon-less ;ld';sald';asld is easier and safer in TS because most gotcha edge cases are type invalid as
      well."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title style="color: black">Evan You</v-list-item-title>
        </v-list-item-content>

        <v-row
            align="center"
            justify="end"
        >
          <v-icon class="mr-1" color="black">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2" style="color: black">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1" style="color: black">
            mdi-share-variant
          </v-icon>
          <span class="subheading" style="color: black">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PostCart"


}
</script>

<style scoped>

</style>