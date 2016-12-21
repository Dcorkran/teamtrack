
exports.up = function(knex, Promise) {
  return knex.schema.table('player', function(table){
   table.string('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('player', function(table){
   table.dropColumn('password');
  });
};
