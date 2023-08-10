export async function seed(knex) {
  await knex('books').insert([
    {
      id: 1,
      name: 'Milk and honey',
      author: "Rupi Kaur",
      activity_length: 1,
      activity_group: 1
    },
    {
      id: 2,
      name: 'The wee free men',
      author: "Terry Pratchett",
      activity_length: 2,
      activity_group: 1
    },
    {
      id: 3,
      name: 'Shogun',
      author: "James Clavell",
      activity_length: 3,
      activity_group: 1
    }
  ])
}
