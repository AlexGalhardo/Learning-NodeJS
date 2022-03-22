const jwt = require("jsonwebtoken");

module.exports = {
  createToken(id) {
    return jwt.sign({ id }, "secret", { expiresIn: "1d" });
  },

  verifyToken(token) {
    return jwt.verify(token, "secret");
  },
};
