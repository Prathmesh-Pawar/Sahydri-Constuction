<<<<<<< HEAD
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
=======
// getting-started.js

const mongoose = require("mongoose") ;

// const mon_url ='mongodb://127.0.0.1:27017/Sahydri_constuctuion' ;
const mon_url = 'mongodb+srv://shubham:shubham4912@cluster0.xzkbevd.mongodb.net/?retryWrites=true&w=majority'  ;

connectMongo().catch(err => console.log(err));


async function connectMongo(){
    await mongoose.connect(mon_url ) ;
    console.log("connected to database")
  } ;

  module.exports = connectMongo ;

>>>>>>> 091138055e5912d19d41d0ac554afad795cd9fdf
