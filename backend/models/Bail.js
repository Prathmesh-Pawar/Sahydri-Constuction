const mongoose = require("mongoose") ;


const bull = new mongoose.Schema(
    {
        name : {
            type : String ,
            required : true 
        },
        gadi_name : {
            type : String
        },
        malak : {
            type : [String] 
        },
        Driver : {
            type : [String] 
        },
        sutti_maker : {
            type : [String] 
        },
        Address : {
            Village :{ type : String , required : true },
            Taluka :  String ,
            District  :  String , 
        },
        contact_number : {
            type:Number
        },
        image : {
            type : String 
        }
    }
)

module.exports = mongoose.model( 'bull' , bull ) ;