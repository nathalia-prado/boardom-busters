export async function seed(knex) {
  await knex('board_games').insert([
    {
      id: 1,
      name: 'Uno',
      difficult: "easy",
      activity_length: 1,
      activity_group: 2
    },
    {
      id: 2,
      name: 'Pandemic',
      difficult: "Medium",
      activity_length: 2,
      activity_group: 2
    },
    {
      id: 3,
      name: 'Monopoly',
      difficult: "Medium",
      activity_length: 3,
      activity_group: 2
    }
  ])
}
