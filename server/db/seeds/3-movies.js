export async function seed(knex) {
  await knex('movies').insert([
    {
      id: 1,
      name: 'Session Man',
      director: "Seth Winston",
      activity_length: 1,
      activity_group: 3
    },
    {
      id: 2,
      name: 'Wallace and Gromit',
      director: "Aardman Animations",
      activity_length: 2,
      activity_group: 3
    },
    {
      id: 3,
      name: 'Gladiator',
      director: "Ridley Scott",
      activity_length: 3,
      activity_group: 3
    }
  ])
}
