module.exports = {
  Query: {
    async user(_, { login }, { dataSources }) {
      return await dataSources.gitHubService.getUser(login);
    },
  },
};
