const mongoose = require('mongoose')
const express = require('express')
const app = express()
const db = require('./config/keys').mongoURI
const users = require('./routes/api/users')
const posts = require('./routes/api/posts')
const bodyParser = require('body-parser')

mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('connected to mongodb successfully'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  console.log(res)
  res.send('How you doin, World?!?! Okurrr!!!')
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/api/users", users)
app.use("/api/posts", posts)


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running on port ${port}`))