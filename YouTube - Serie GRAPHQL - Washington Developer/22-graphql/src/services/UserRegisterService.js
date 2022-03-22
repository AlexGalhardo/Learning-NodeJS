const db = require("../db");

class UserRegisterService {
  async addUser(user) {
    return await (await db("users").insert(user).returning("*"))[0];
  }
  async getUserByLogin(login) {
    return await db("users").where({ login }).first();
  }
}

module.exports = new UserRegisterService();
