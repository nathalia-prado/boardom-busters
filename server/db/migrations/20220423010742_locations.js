export function up(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
  })
}

export function down(knex) {
  return knex.schema.dropTable('books')
}
