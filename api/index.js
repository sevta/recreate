const express = require('express')
const { scryptSync, randomBytes } = require('crypto')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Any random string here (ideally should be atleast 16 bytes)

const salt = randomBytes(16).toString('hex')

// Pass the password string and get hashed password back
// ( and store only the hashed string in your database)

const getHash = (password) => scryptSync(password, salt, 32).toString('hex')

app.get('/events', (req, res) => {
  res.send({ message: 'ok', password: getHash('tester') })
})

module.exports = app
