require('dotenv/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//Import Routes
const postsRoute = require('./routers/posts')

app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => res.send('Home Page!'))

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () => console.log('Connected to DB!'))

//listen to server
app.listen(3000)
