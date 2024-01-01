const mongoose = require("mongoose")

const driver = new mongoose.Schema({
    name : {
        type  : String , 
        required : true 
    },
    contact : {
        Phone : Number ,
        Email : String  
    }, 
    Address : {
        Village : String ,
        Taluka : String ,
        District : String
    }

})

module.exports = mongoose.model("driver" , driver) ;
