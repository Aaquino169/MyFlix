const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs', { currentUser: req.session.currentUser })
})

// on sessions form submit (log in)
sessions.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    // Database error
    if (err) {
      console.log(err)
      res.send('<a  href="/movies">Sorry, an error occurred </a>')
    } else if (!foundUser) {
      // if found user is undefined/null not found etc
      res.send('<a  href="/movies">Sorry, no user found </a>')
    } else {
      // user is found yay!
      // now let's check if passwords match
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // add the user to our session
        req.session.currentUser = foundUser
        // redirect back to our home page
        res.redirect('/movies')
      } else {
        // passwords do not match
        res.send('<a href="/movies"> password does not match </a>')
      }
    }
  })
})

sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    console.log("check")
    res.redirect('/movies')
  })
})

module.exports = sessions