// getting-started.js

const mongoose = require("mongoose") ;

const mon_url ='mongodb://127.0.0.1:27017/Sahydri_constuctuion' ;

connectMongo().catch(err => console.log(err));


async function connectMongo(){
    await mongoose.connect(mon_url ) ;
    console.log("connected to database")
  } ;

  module.exports = connectMongo ;
