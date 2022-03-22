class UserNotFoundError extends Error {
  constructor(message, ...args) {
    super(message, ...args);

    this.message = message;
    this.name = "UserNotFoundError";
  }
}

module.exports = UserNotFoundError;
