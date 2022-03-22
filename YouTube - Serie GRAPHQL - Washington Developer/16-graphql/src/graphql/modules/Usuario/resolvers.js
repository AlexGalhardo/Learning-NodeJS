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
    usuario(_, { filtro }) {
      if (filtro.id) {
        return db.usuarios.find((db) => db.id === filtro.id);
      } else {
        return db.usuarios.find((db) => db.email === filtro.email);
      }
    },
    usuarios: () => db.usuarios,
  },
  Mutation: {
    criarUsuario(_, { data }) {
      const { email } = data;

      const usuarioExistente = db.usuarios.some((u) => u.email === email);

      if (usuarioExistente) {
        throw new Error(`Usuário Existente: ${data.nome}`);
      }

      const novoUsuario = {
        ...data,
        id: geradorDeId(db.usuarios),
        perfil_id: 2,
      };

      db.usuarios.push(novoUsuario);

      return novoUsuario;
    },
    atualizarUsuario(_, { id, data }) {
      const usuario = db.usuarios.find((u) => u.id === id);
      const indice = db.usuarios.findIndex((u) => u.id === id);

      const novoUsuario = {
        ...usuario,
        ...data,
      };

      db.usuarios.splice(indice, 1, novoUsuario);

      return novoUsuario;
    },
    deletarUsuario(_, { filtro: { id, email } }) {
      return deletarUsuarioFiltro(id ? { id } : { email });
    },
  },
};

function deletarUsuarioFiltro(filtro) {
  const chave = Object.keys(filtro)[0];
  const valor = Object.values(filtro)[0];

  const usuarioEncontrado = db.usuarios.find((u) => u[chave] === valor);
  db.usuarios = db.usuarios.filter((u) => u[chave] !== valor);

  return !!usuarioEncontrado;
}
