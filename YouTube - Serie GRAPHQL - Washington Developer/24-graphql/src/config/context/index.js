const generator = require("../../helpers/generator");
const NoPermissionError = require("../../errors/NoPermissionError");

module.exports = ({ req }) => {
  const token = req.headers.authorization;

  return {
    validate() {
      try {
        const { id } = generator.verifyToken(token);
        return id;
      } catch (e) {
        throw new NoPermissionError("Você não esta autenticado!!!");
      }
    },
  };
};
