module.exports = {
  Query: {
    async tasks(_, __, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.tasksService.getTasks(user_id);
    },
    async task(_, { id }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.tasksService.getTaskById(user_id, id);
    },
  },
  Mutation: {
    async createTask(_, { data }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.tasksService.addTask(user_id, data);
    },
    async deleteTask(_, { id }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.tasksService.deleteTask(user_id, id);
    },
    async updateTask(_, { id, data }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.tasksService.updateTask(user_id, id, data);
    },
  },
};
