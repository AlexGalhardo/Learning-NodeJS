const db = require("../../../db");

module.exports = {
  Query: {
    contatos: async () => await db("contatos"),
  },
  Mutation: {
    criarContato: async (_, { data }) =>
      await (await db("contatos").insert(data).returning("*"))[0],
    atualizarContato: async (_, { id, data }) =>
      await (await db("contatos").where({ id }).update(data).returning("*"))[0],
    deletarContato: async (_, { filtro }) => {
      if (filtro.id) {
        return await db("contatos").where({ id: filtro.id }).delete();
      }
      if (filtro.email) {
        return await db("contatos").where({ email: filtro.email }).delete();
      }

      throw new Error("Favor passar um parametro!!!");
    },
  },
};
