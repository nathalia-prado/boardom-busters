import express from 'express'

import * as db from '../db/index.ts'
import * as utils from '../utils/utils.ts'

const router = express.Router()

// GET /books
router.get('/', async (req, res, next) => {
  res.render('homepage')
})

router.get('/show-all-books', async (req, res) => {
  const books = await utils.showAllBooks()
  res.render('showBooks', books)
})

export default router
