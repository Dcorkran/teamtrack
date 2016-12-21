
exports.up = function(knex, Promise) {
  return knex.schema.table('player', function(table){
   table.string('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('player', function(table){
   table.dropColumn('password').notNullable();
  });
};
