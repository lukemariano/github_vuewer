export const api = {
  async getUsers(searchString) {
    const result = await fetch(
      `https://api.github.com/search/users?q=${searchString}`
    );
    return await result.json();
  },

  // pesquisa repo:  https://api.github.com/users/USERNAME/repos

  async getRepos(username, page) {
    if (!page) {
      page = 1;
    }

    const result = await fetch(
      ` https://api.github.com/users/${username}/repos?page=${page}`
    );

    return await result.json();
  },
};
