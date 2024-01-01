const mongoose = require("mongoose") ;


<<<<<<< HEAD
const message = new mongoose.Schema({
    Name : String ,
    Mobile : Number ,
    Message : String ,
    
})

module.exports = mongoose.model("message" , message) ;
=======

const mess = mongoose.Schema({
    name :{
        type : String , 
        required : true ,
    },
    email : {
        type : String ,
    },
    phone:{
        type:Number ,
        required : true
    },
    message :{
        type:String , 
    },
    
});


module.exports = mongoose.model("Message" , mess) ;
>>>>>>> 091138055e5912d19d41d0ac554afad795cd9fdf
