
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
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false
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
app.use('/movies',moviesController)

const usersController = require('./controllers/users')
app.use('/users', usersController)

const sessionsController = require('./controllers/sessions')
app.use('/sessions',sessionsController)

app.get('/', (req, res) => {
    res.render('userHome.ejs', { 
        currentUser: req.session.currentUser,
        
    })
  })




app.listen(PORT, () => {
    console.log('App is running')
})



