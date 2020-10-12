<template>
  <v-container class="flex-column">
    <p class="text-lg-h1 text-center text-h2">URL Shorter</p>
    <br />
    <p class="text-body-1 text-center">
      Tired of remembering long URL? Let me short it for you!
    </p>
    <br />
    <br />
    <v-text-field
      label="Original URL"
      placeholder="Put long and boring url here"
      outlined
      clearable
      v-model="longUrl"
    ></v-text-field>
    <div class="my-2 text-center">
      <v-btn large color="primary" @click="short()">Go！</v-btn>
    </div>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Main extends Vue {
  longUrl: string = "";
  short() {
    console.log(this.longUrl);
  }
}
</script>