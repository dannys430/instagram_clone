const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
const users = require('./routes/api/users')
const posts = require('./routes/api/posts')
const bodyParser = require('body-parser') // tells our app which requests to respond to
const User = require('./models/User')

mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('connected to mongodb successfully'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  const user = new User({
    handle: 'jim',
    email: 'jim@jim.jim',
    password: 'jimisgreat123'
  })
  user.save()
  // console.log(res)
  res.send('How you doin, World?!?! Okurrr!!!')
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/api/users", users)
app.use("/api/posts", posts)


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running on port ${port}`))