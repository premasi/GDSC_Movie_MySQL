// Express
const express = require('express')
const app = express()
const port = 4000

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization')
  next()
})

var bodyParser = require('body-parser')

// body parserd
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/LatihanGDSC');
}

// DB schema
const User = mongoose.model('User', {
    username: String,
    password: String,
    wishlist: String
})

app.post('/user', (req, res) => {
    User.insertMany(req.body, (error, result) => {
      console.log('success');
    })
})

app.put('/user', async (req, res) => {
  const akun = await User.findOne({username: req.body.username, password: req.body.password})
  if(akun) {
    res.json(akun)
  }else{
    res.json({"error" : "error404"})
  }
})

app.put('/wishlist', async (req, res) => {
  const akun = await User.findOne({username: req.body.username})
  if(akun) {
    User.updateOne({username: req.body.username}, {wishlist: JSON.stringify(req.body.wishlist)}, (err, res) => {
      console.log('success');
    })
  }else{
    res.json({"error" : "error404"})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})