import * as Path from 'node:path'

import express from 'express'
import * as hbs from 'express-handlebars'

import bookRoutes from './routes/boardom.ts'

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
  res.redirect('/boardom')
})

server.use('/boardom', bookRoutes)
