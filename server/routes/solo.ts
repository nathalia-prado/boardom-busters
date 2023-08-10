import express from 'express'

import * as db from '../db/index.ts'

const router = express.Router()

router.get('/solo', (req, res) => {
  res.redirect('showBooks')
})
