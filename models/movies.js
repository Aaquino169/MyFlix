const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title:{type:String, require:true},
    "title img":{type:String, require:true},
    img:{type:String, require:true},
    "release date":{type:Number, require:true},
    description:{type:String, required:true},
    director:{type:String, require:true},
    genre:{type:String, require:true},
    staring:{type:String, require:true},
    icon:{type:String, require:true},
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie