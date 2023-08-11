import * as Path from 'node:path'

import express from 'express'
import * as hbs from 'express-handlebars'
import * as utils from './utils/utils.ts'

// import boardom from './routes/boardom.ts'
// import * as book from '../models/Book.ts'

/*
 * create the server
 *************************/

const server = express()
export default server

/*
 * configure the server
 *************************/

const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

/*
 * define the routes
 *************************/

server.get('/', (req, res) => {
  res.render('homepage')
})

server.get('/group-size', (req, res) => {
  res.render('smallOrLarge')
})

server.get('/show-book/:id', async (req, res) => {
  const bookId = Number(req.params.id)
  const bookById = await utils.getBookById(bookId)
  res.render('singleBook', bookById)
})

server.get('/show-all-books', async (req, res) => {
  const books = await utils.showAllBooks()
  res.render('showBooks', { books })
})

server.get('/show-all-games', async (req, res) => {
  const game = await utils.showAllBoardGames()
  res.render('showBoardGames', { game })
})

server.get('/show-game/:id', async (req, res) => {
  const gameId = Number(req.params.id)
  const gameById = await utils.getGameById(gameId)
  res.render('singleGame', gameById)
})

// router.get('/', async (req, res) => {
//   const getWombles = await db.getAllWombles()
//   res.render('all-wombles', { getWombles })
// })

// server.use('/boardom', boardom)
