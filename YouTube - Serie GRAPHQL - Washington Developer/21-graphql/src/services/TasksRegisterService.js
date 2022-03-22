const db = require("../db");

class TasksRegisterService {
  async getTasks(user_id) {
    return await db("tasks").where({ user_id });
  }

  async getTaskById(user_id, id) {
    const task = await db("tasks").where({ id }).first();

    if (!task) throw new Error("Tarefa não encontrada!");

    if (task.user_id != user_id) {
      throw new Error("Você não tem permissão!");
    }

    return task;
  }

  async addTask(user_id, data) {
    return await (
      await db("tasks")
        .insert({ user_id, ...data })
        .returning("*")
    )[0];
  }

  async deleteTask(user_id, id) {
    await this.getTaskById(user_id, id);

    return await db("tasks").where({ id }).delete();
  }

  async updateTask(user_id, id, data) {
    await this.getTaskById(user_id, id);

    return await (
      await db("tasks").where({ id }).update(data).returning("*")
    )[0];
  }
}

module.exports = new TasksRegisterService();
