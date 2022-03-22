const { RESTDataSource } = require("apollo-datasource-rest");

class GitHubService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.github.com";
  }

  async getUser(login) {
    return await this.get(`/users/${login}`);
  }
}

module.exports = new GitHubService();
