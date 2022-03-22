exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("title").notNull();
    table.string("description").notNull();
    table.integer("user_id").notNull();

    table.foreign("user_id").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};
