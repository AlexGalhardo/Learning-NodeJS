const db = require("../../../db");

function geradorDeId(lista) {
  let novoId;
  let ultimo = lista[lista.length - 1];
  if (!ultimo) {
    novoId = 0;
  } else {
    novoId = ultimo.id;
  }

  return ++novoId;
}

module.exports = {
  Usuario: {
    perfil(usuario) {
      return db.perfis.find((p) => p.id === usuario.perfil_id);
    },
  },
  Query: {
    usuario(_, args) {
      return db.usuarios.find((db) => db.id === args.id);
    },
    usuarios: () => db.usuarios,
  },
  Mutation: {
    criarUsuario(_, args) {
      const { email } = args;

      const usuarioExistente = db.usuarios.some((u) => u.email === email);

      if (usuarioExistente) {
        throw new Error(`Usuário Existente: ${args.nome}`);
      }

      const novoUsuario = {
        ...args,
        id: geradorDeId(db.usuarios),
        perfil_id: 2,
      };

      db.usuarios.push(novoUsuario);

      return novoUsuario;
    },
  },
};
