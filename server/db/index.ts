import knexFile from './knexfile.js'
import knex from 'knex'
import type { Book, BookData } from '../../models/Book.ts'

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