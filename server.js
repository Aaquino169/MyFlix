const express = require('express')

const app = express()

const mongoose = require('mongoose')

require('dotenv').config()

//env varables
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI

//mongoose connection
mongoose.connect(mongodbURI,{
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:false
},() => {
    console.log('connected to mongo')
})

//homepage
app.get('/',(req,res) => {
    res.send('home page')
})


app.listen(PORT, () => {
    console.log('App is using port:', PORT)
})



