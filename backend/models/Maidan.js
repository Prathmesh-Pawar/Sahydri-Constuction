const mongoose = require("mongoose") ;


const maidan = new mongoose.Schema(
    {
        name : String ,
        Date : Date ,
        Location : {
            village : String ,
            district : String ,
            taluka : String 
        } ,
        Prize : [ ] ,
        winners : [] ,
        comentetor : String ,
        Details : String ,
    }
)

module.exports = mongoose.model("Maidan" , maidan) ;