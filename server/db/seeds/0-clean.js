export async function seed(knex) {
  await knex('books').del()
  await knex('board_games').del()
  await knex('movies').del()
}
