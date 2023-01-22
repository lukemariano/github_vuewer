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
    <div><v-btn>Buscar</v-btn></div>
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

      fetch(`https://api.github.com/search/users?q=${this.searchUser}`)
        .then((response) => response.json())
        .then((data) => {
          this.userList = data.items;
          this.userLoading = false;
        });
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
