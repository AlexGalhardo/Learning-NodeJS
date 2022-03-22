class NoPermissionError extends Error {
  constructor(message, ...args) {
    super(message, ...args);

    this.message = message;
    this.name = "NoPermissionError";
  }
}

module.exports = NoPermissionError;
