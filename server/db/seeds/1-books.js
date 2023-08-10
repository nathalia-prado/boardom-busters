export async function seed(knex) {
  await knex('books').insert([
    {
      id: 1,
      name: 'Milk and honey',
      description: "Milk and honey's description ",
    },
    {
      id: 2,
      name: 'The wee free men',
      description: "The wee free men's description",
    },
    {
      id: 3,
      name: 'Shogun',
      description: "Shogun's description",
    }
  ])
}
