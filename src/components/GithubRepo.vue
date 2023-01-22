<template>
  <div>
    <h1>Hello app!</h1>
    <v-autocomplete
      v-model="user"
      :items="userList"
      :loading="userLoading"
      :search-input.sync="searchUser"
      item-text="login"
    ></v-autocomplete>
  </div>
</template>

<script>
import { deboucerDecorator } from "@/helpers/deboucer";

export default {
  name: "GithubRepo",

  data: () => ({
    user: null,
    searchUser: null,
    userList: [],
    userLoading: false,
  }),

  methods: {
    getGithubUser: deboucerDecorator(function () {
      // arrow function não passa o 'this' corretamente
      console.log(this.searchUser);
      this.userLoading = true;
      setTimeout(() => {
        this.userList = [{ login: "lucas" }, { login: "prata" }];

        this.userLoading = false;
      }, 1000);
    }, 500),
  },

  watch: {
    searchUser() {
      // cada vez que eu digito ele chama essa função
      // se eu ficar digitando ele fica chamando e ela fica aguardando os 500 milisegundos
      // Ou seja, só chama a função de search se eu parar de digitar
      this.getGithubUser();
    },
  },
};
</script>
