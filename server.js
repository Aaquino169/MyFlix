
const express = require('express')

const app = express()

const mongoose = require('mongoose')

const session = require('express-session')


require('dotenv').config()

//env varables
const PORT = process.env.PORT

const mongodbURI = process.env.MONGODBURI

const db = mongoose.connection

const bodyParser = require('body-parser')

//Middleware
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

app.use(
    session({
      secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
      resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
      saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
    })
  )
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

const userController = require('./controllers/users')
app.use('/users', userController)


app.listen(PORT, () => {
    console.log('App is running')
})



