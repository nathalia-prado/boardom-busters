import knexFile from './knexfile.js'
import knex from 'knex'
import type { Book } from '../../models/Book.ts'
import type { BoardGame } from '../../models/BoardGame.ts'
import type { Movie } from '../../models/Movie.ts'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const db = knex.default(config)

export async function getAllBooks(): Promise<Book[]> {
  try {
    return db('books').select()
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export async function getAllBoardGames(): Promise<BoardGame[]> {
  try {
    return db('board_games').select()
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export async function getAllMovies(): Promise<Movie[]> {
  try {
    return db('movies').select()
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}