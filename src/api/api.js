export const api = {
  async getUsers(searchString) {
    const result = await fetch(
      `https://api.github.com/search/users?q=${searchString}`
    );
    return await result.json();
  },
};
