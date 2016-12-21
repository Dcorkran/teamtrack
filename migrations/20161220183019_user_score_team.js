exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('player',function(table){
      table.increments();
      table.string('player_fname').notNullable();
      table.string('player_lname').notNullable();
      table.string('player_email').unique().notNullable();;
      table.boolean('admin');
    }),
    knex.schema.createTable('team', function(table){
      table.increments();
      table.string('team_name').notNullable();
    }),
    knex.schema.createTable('player_team',function(table){
      table.increments();
      table.integer('player_id').references('player.id').unsigned().onDelete('CASCADE');
      table.integer('team_id').references('team.id').unsigned().onDelete('CASCADE');
    }),
    knex.schema.createTable('score',function(table){
      table.increments();
      table.string('game_name').notNullable();
      table.integer('team1_score').notNullable();
      table.integer('team2_score').notNullable();
      table.date('game_date');
      table.integer('team1_id').references('team.id').unsigned().onDelete('CASCADE');
      table.integer('team2_id').references('team.id').unsigned().onDelete('CASCADE');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('score'),
    knex.schema.dropTable('player_team'),
    knex.schema.dropTable('team'),
    knex.schema.dropTable('player')
  ]);
};
