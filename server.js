const express = require('express')

const app = express()

const mongoose = require('mongoose')


require('dotenv').config()

//env varables
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI

const db = mongoose.connection

//mongoose connection
mongoose.connect(mongodbURI,{
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:false
},() => {
    console.log('connected to mongo')
})

//import controllers
const moviesController = require('./controllers/movies')
app.use('/homepage',moviesController)

const usersController = require('./controllers/users')
app.use('/users', usersController)

const sessionsController = require('./controllers/sessions')
app.use('/sessions',sessionsController)


app.listen(PORT, () => {
    console.log('App is running')
})



