// this file will contain routes that different people can go to.  for now we just have '/', but there will be many more added
//this is connected to server.js

import express from 'express'

const router = express.Router()

router.route('/').get((req, res) => res.send('hello world'))

export default router