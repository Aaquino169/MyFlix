
const express = require('express')

const app = express()

const mongoose = require('mongoose')

const session = require('express-session')

const methodOverride = require('method-override')

require('dotenv').config()

//env varables
const PORT = process.env.PORT

const mongodbURI = process.env.MONGODBURI

const db = mongoose.connection

const bodyParser = require('body-parser')

//Middleware
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

app.use(methodOverride('_method'))


app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false
    })
  )
//mongoose connection
mongoose.connect(mongodbURI,{
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
},() => {
    console.log('connected to mongo')
})

//import controllers
const moviesController = require('./controllers/movies')
app.use('/', moviesController)

const usersController = require('./controllers/users')
app.use('/users', usersController)

const sessionsController = require('./controllers/sessions')
app.use('/sessions', sessionsController)


app.listen(PORT, () => {
    console.log('App is running')
})



