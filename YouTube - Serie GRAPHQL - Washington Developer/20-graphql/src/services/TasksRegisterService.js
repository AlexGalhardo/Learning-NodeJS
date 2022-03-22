const db = require("../db");

class TasksRegisterService {
  async getTasks(user_id) {
    return await db("tasks").where({ user_id });
  }
}

module.exports = new TasksRegisterService();
