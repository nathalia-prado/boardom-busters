export function up(knex) {
    return knex.schema.createTable('board_games', (table) => {
      table.increments('id').primary()
      table.varchar('name').notNullable()
      table.varchar('difficult')
      table.integer('activity_length').notNullable()
      table.integer('activity_group').notNullable()
    })
  }
  
  export function down(knex) {
    return knex.schema.dropTable('board_games')
  }
  