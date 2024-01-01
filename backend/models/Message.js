const mongoose = require("mongoose") ;


const message = new mongoose.Schema({
    Name : String ,
    Mobile : Number ,
    Message : String ,
    
})

module.exports = mongoose.model("message" , message) ;