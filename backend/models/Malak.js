const mongoose = require("mongoose") 

const malak = new mongoose.Schema(
    {
        name : {
            type : String , 
            required : true
        },
        contact : {
            phone : Number , 
            email : String ,
        },
        address : {
            village : String ,
            taluka : String ,
            district : String
        }
    }
); 

module.exports = mongoose.model("malak" , malak) ;