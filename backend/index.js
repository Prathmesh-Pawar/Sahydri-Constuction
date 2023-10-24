const express = require("express") ;
require("dotenv").config() ;
const connect = require("./Config/db") ;
const cors = require("cors") ;

const app = express() ;
const PORT = process.env.PORT ;
app.use(express.json()) ;
app.use(cors()) ;
app.get("/get" ,(req , res)=>{
    console.log("Get Route Called")
    res.status(200).send("Succesfully Tested")
})

app.use("/api/message" , require("./Routes/Message"))

connect ;

app.listen(PORT || 5000 , ()=>{
    console.log("Connected to server Succesfully at Port ",PORT)
})