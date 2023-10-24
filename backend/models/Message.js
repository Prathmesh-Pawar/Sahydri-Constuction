const mongoose = require("mongoose") ;



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