const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users')

users.get('/new', (req, res) => {
  res.render('users/new.ejs', { currentUser: req.session.currentUser })
})

users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    console.log('user is created', createdUser)
    res.redirect('/')
  })
})

// users.get('/home', (req, res) => {
//   if(req.session.currentUser) {
//     res.render('userHome.ejs', {
//       currentUser: req.session.currentUser,
//     })
//   }else{
//     res.redirect('/sessions/new')
//   }
// })

module.exports = users