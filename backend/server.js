//import middleware
import express from 'express'
import cors from 'cors'

//import a file we will create to store our routes
import books from './frontend/api/books.route.js'

//create server
const app = express()

//attach middleware that express will use
app.use(cors())
app.use(express.json())


//initial routes
app.use('/api/v1/books', books)
app.use('*', (req, res) => {
    res.status(404).json({error: "not found"})
})

export default app;