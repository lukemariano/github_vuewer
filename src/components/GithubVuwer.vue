<template>
  <v-container>
    <GithubRepo></GithubRepo>
  </v-container>
</template>

<script>
import GithubRepo from "./GithubRepo";
export default {
  name: "GithubVuewer",

  components: {
    GithubRepo,
  },
  data: () => ({}),
};
</script>
