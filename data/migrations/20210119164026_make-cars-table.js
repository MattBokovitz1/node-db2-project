exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();
    table.string("vin", 128).unique().notNullable();
    table.string("make", 128).notNullable();
    table.string("model", 128).notNullable();
    table.integer("mileage").notNullable();
    table.string("transmission", 128);
    table.boolean("clean_title");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
