function later(result) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}

export const api = {
  async getUsers(searchString) {
    const result = { items: [{ login: "lucas" }, { login: "joão" }] };
    return later(result);
  },

  async getRepos(username) {
    const result = [{ name: "Pandas" }, { name: "Javascript" }];
    return later(result);
  },
};
