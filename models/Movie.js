const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    URL:{
        type:String,
        required:true
    },


})

module.exports = mongoose.model('Movie',MovieSchema);