<template>
  <div>
    <v-row class="text-center">
      <v-col cols="12"> Issues </v-col>
    </v-row>
  </div>
</template>

<script>
import { api } from "~api";

export default {
  name: "GithubIssues",
  props: ["repo"],
  data: () => ({
    issues: [],
  }),

  methods: {},

  watch: {
    repo() {
      console.log("repo passada para filho");
      console.log(this.repo);
    },
  },
};
</script>
