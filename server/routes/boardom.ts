import express from 'express'

import * as db from '../db/index.ts'

const router = express.Router()

// GET /books
// TODO: Replace this with all of the books in the database
router.get('/', async (req, res, next) => {
  try {
    const books = await db.getAllBooks()
    const viewData = { books }  
    res.render('showBooks', viewData)
  } catch (e) {
    next(e)
  }    
})

export default router
