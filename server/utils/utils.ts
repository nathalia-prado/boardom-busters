import knexFile from '../db/knexfile.js'
import knex from 'knex'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const db = knex.default(config)

export function showAllBooks() {
  return db('books').select()
}

export function showAllBoardGames() {
  return db('board_games').select()
}

export async function getBookById(bookId: number) {
  const result = await db('books').where('books.id', bookId).first()
  return result
}

export async function getGameById(gameId: number) {
  const result = await db('board_games').where('board_games.id', gameId).first()
  return result
}
