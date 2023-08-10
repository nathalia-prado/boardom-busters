import express from 'express'

import * as db from '../db/index.ts'
import * as utils from '../utils/utils.ts'

const router = express.Router()

// router.get('/solo', async (req, res) => {
//   res.redirect('showBooks')
// })

// router.get('/show-all-books', async (req, res) => {
//   const books = await utils.showAllBooks()
//   res.render('showBooks', books)
// })
