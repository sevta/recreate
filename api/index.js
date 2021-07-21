const express = require('express')
const { scryptSync, randomBytes } = require('crypto')
const app = express()
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

const User = require('./models/User')

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Any random string here (ideally should be atleast 16 bytes)

const salt = randomBytes(16).toString('hex')

// Pass the password string and get hashed password back
// ( and store only the hashed string in your database)

const getHash = (password) => scryptSync(password, salt, 32).toString('hex')

app.get('/', (req, res) => {
  res.send({ msg: 'ok' })
})

app.post('/auth/register', async (req, res) => {
  const { username, email, password } = req.body
  const user = await User.findOne({
    email,
  })

  if (user) return res.send({ msg: 'email has been registered' })

  const newUser = await User.create({
    username,
    email,
    password,
  })

  console.log(newUser)
  res.send({
    msg: 'success',
    user: newUser,
  })
})

app.get('/events', async (req, res) => {
  const users = await User.find().select('username email')
  console.log(users)
  res.send({
    message: 'ok',
    hash: getHash('tester'),
    users,
    status: 'asdasdok',
  })
})

module.exports = app
