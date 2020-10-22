const express = require('express')
const movies = express.Router()

movies.get('/',(req,res) => {
    res.send('home page')
})



module.exports = movies