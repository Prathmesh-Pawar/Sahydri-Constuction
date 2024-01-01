const express = require("express") ;
<<<<<<< HEAD
const dotenv  = require("dotenv") ;
const connect = require("./Config/db") ;
const cors = require("cors") ;
dotenv.config()


const app = express() ;
const PORT = process.env.PORT ;

connect() ;
app.use(express.json()) ;
app.use(cors()) ;
app.get("/api/get" ,(req , res)=>{
=======
require("dotenv").config() ;
const connect = require("./Config/db") ;
const cors = require("cors") ;

const app = express() ;
const PORT = process.env.PORT ;
app.use(express.json()) ;
app.use(cors()) ;
app.get("/get" ,(req , res)=>{
>>>>>>> 091138055e5912d19d41d0ac554afad795cd9fdf
    console.log("Get Route Called")
    res.status(200).send("Succesfully Tested")
})

<<<<<<< HEAD
app.use("/api/bail" , require("./Routes/Bail")) ;
app.use("/api/driver" , require("./Routes/Driver")) ;
app.use("/api/malak" , require("./Routes/Malak")) ;
app.use("/api/maidan" , require("./Routes/Maidan")) ;
app.use("/api/message" , require("./Routes/Message")) ;


=======
app.use("/api/message" , require("./Routes/Message"))

connect ;
>>>>>>> 091138055e5912d19d41d0ac554afad795cd9fdf

app.listen(PORT || 5000 , ()=>{
    console.log("Connected to server Succesfully at Port ",PORT)
})