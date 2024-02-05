//import middleware
import express from 'express'
const axios = require('axios')
import cors from 'cors'

//import a file we will create to store our routes
import books from './api/books.route'

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

// Google Books API key
const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

app.get('/api/search', async (req, res) => {
    const { query } = req.query;
  
    try {
      // Search books via Google Books API
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`);
      const books = response.data.items.map(item => ({
        title: item.volumeInfo.title,
        description: item.volumeInfo.description,
      }));
  
      // Connect to MongoDB and store the search results
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      const db = client.db('bookDB');
      const collection = db.collection('searches');
      await collection.insertOne({ query, books, timestamp: new Date() });
      await client.close();
  
      res.json(books);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching books');
    }
  });
  

export default app;