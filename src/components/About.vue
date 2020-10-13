<template>
  <v-card>
    <br />
    <p class="text-lg-h2 text-center text-h3">URL Shorter</p>
    <v-divider inset />
    <br />
    <p class="text-body-1 text-center">
      Powered by
      <a href="https://dotnet.microsoft.com/apps/aspnet">ASP .Net Core</a> &
      <a href="https://vuejs.org/">Vue.js</a>
    </p>
    <p class="text-body-1 text-center">
      Author:Gaojianli
      <github-button
        href="https://github.com/Gaojianli"
        aria-label="Follow @Gaojianli on GitHub"
        >Follow @Gaojianli</github-button
      >
    </p>
    <br/>
    <p class="text-body-1 text-center">If this help you, please give me a star:<github-button href="https://github.com/Gaojianli/UrlShorter" data-icon="octicon-star" aria-label="Star Gaojianli/UrlShorter on GitHub">Star</github-button></p>
    <br/>
    <br/>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GithubButton from 'vue-github-button';

@Component({
  components: { GithubButton },
})
export default class About extends Vue {}
</script>
