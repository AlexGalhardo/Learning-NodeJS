const NoPermissionError = require("../../errors/NoPermissionError");
const TaskNotFoundError = require("../../errors/TaskNotFoundError");
const UserNotFoundError = require("../../errors/UserNotFoundError");

module.exports = (error) => {
  if (error.originalError instanceof NoPermissionError) {
    return new Error(error.message);
  }
  if (error.originalError instanceof TaskNotFoundError) {
    return new Error(error.message);
  }
  if (error.originalError instanceof UserNotFoundError) {
    return new Error(error.message);
  }
  return error;
};
