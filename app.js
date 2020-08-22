const mongoose = require('mongoose')
const express = require('express')
const app = express()
const db = require('./config/keys').mongoURI

mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('connected to mongodb successfully'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World, fayesssodf'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running on port ${port}`))