const mongoose = require("mongoose") ;
const dotenv  = require("dotenv") ;

dotenv.config() ;

// const MONGO_URL ='mongodb://127.0.0.1:27017/Bailgada' ;
const MONGO_URL = process.env.MONGO_URl ;

const connect = async()=>{
    try{
    await mongoose.connect(MONGO_URL) ;
    console.log("Connected to Database") ;
    }catch(error)
    {
        console.log(error) ;
    }
}




module.exports = connect ;