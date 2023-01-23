<template>
  <div>
    <v-row class="text-center">
      <v-col cols="12">
        <template>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Issue ID</th>
                  <th class="text-left">Title</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="issue in issues" :key="issue.number">
                  <td class="text-left">{{ issue.number }}</td>
                  <td class="text-left">{{ issue.title }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-progress-circular
        v-show="loading"
        indeterminate
        color="primary"
      ></v-progress-circular>
    </v-row>
    <v-row class="justify-center">
      <v-btn
        color="primary"
        class="mb-5 mt-5"
        v-show="haveMoreIssues"
        @click="listIssues"
      >
        Get More Issues</v-btn
      >
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
    haveMoreIssues: false,
    loading: false,
    currentPage: 1,
  }),

  methods: {
    async listIssues() {
      this.loading = true;
      const moreIssues = await api.getIssues(
        this.repo.owner.login,
        this.repo.name,
        this.currentPage
      );
      this.issues = this.issues.concat(moreIssues);
      this.currentPage++;
      this.loading = false;
      this.haveMoreIssues = this.issues.length > 0;
    },
  },

  watch: {
    repo() {
      this.issues = [];
      if (this.repo) {
        this.haveMoreIssues = false;
        this.currentPage = 1;
        this.listIssues();
      } else {
        this.issues = [];
        this.haveMoreIssues = false;
        this.currentPage = 1;
      }
    },
  },
};
</script>
