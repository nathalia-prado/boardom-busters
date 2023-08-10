export function up(knex) {
    return knex.schema.createTable('movies', (table) => {
      table.increments('id').primary()
      table.varchar('name').notNullable()
      table.varchar('director')
      table.integer('activity_length').notNullable()
      table.integer('activity_group').notNullable()
    })
  }
  
  export function down(knex) {
    return knex.schema.dropTable('movies')
  }
  