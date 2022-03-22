module.exports = {
  Query: {
    async tasks(_, __, { dataSources, user_id }) {
      return await dataSources.tasksService.getTasks(user_id);
    },
  },
  Mutation: {
    async createTask(_, { data }, { dataSources, user_id }) {
      return await dataSources.tasksService.addTask(user_id, data);
    },
    async deleteTask(_, { id }, { dataSources, user_id }) {
      return await dataSources.tasksService.deleteTask(user_id, id);
    },
    async updateTask(_, { id, data }, { dataSources, user_id }) {
      return await dataSources.tasksService.updateTask(user_id, id, data);
    },
  },
};
