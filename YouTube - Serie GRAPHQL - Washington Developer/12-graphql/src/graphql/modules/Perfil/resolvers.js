const db = require("../../../db");

module.exports = {
  Query: {
    perfis() {
      return db.perfis;
    },
  },
};
