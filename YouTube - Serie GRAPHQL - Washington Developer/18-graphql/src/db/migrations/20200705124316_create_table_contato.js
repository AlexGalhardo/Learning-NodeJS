exports.up = function (knex) {
  return knex.schema.createTable("contatos", (table) => {
    table.increments("id").primary();
    table.string("nome").notNull();
    table.string("email").notNull().unique();
    table.string("telefone").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("contatos");
};
