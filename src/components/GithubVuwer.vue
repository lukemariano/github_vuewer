<template>
  <v-container>
    <GithubRepo @repoSelected="onRepoSelected"></GithubRepo>
    <GitHubIssues :repo="repo"></GitHubIssues>
  </v-container>
</template>

<script>
import GithubRepo from "@/components/GithubRepo.vue";
import GitHubIssues from "@/components/GitHubIssues.vue";
export default {
  name: "GithubVuewer",

  components: {
    GithubRepo,
    GitHubIssues,
  },
  data: () => ({
    repo: null,
  }),
  methods: {
    onRepoSelected(repo) {
      this.repo = repo;
    },
  },
};
</script>
