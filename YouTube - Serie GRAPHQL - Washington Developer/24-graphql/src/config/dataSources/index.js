const GitHubService = require("../../services/GitHub.service");
const UserRegisterService = require("../../services/UserRegisterService");
const TasksRegisterService = require("../../services/TasksRegisterService");

module.exports = () => ({
  gitHubService: GitHubService,
  userRegisterService: UserRegisterService,
  tasksService: TasksRegisterService,
});
