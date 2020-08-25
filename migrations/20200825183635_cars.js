exports.up = async function (knex) {
  await knex.schema.createTableIfNotExists('car-dealer', (table) => {
    table.increments();
    table.text('vin').notNull().unique();
    table.text('make').notNull();
    table.text('model').notNull();
    table.integer('mileage').notNull();
    table.boolean('cleanTitle').defaultTo(true);
  });
};

exports.down = function (knex) {};
