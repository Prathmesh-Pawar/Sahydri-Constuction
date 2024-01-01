const express = require("express") ;
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
    console.log("Get Route Called")
    res.status(200).send("Succesfully Tested")
})

app.use("/api/bail" , require("./Routes/Bail")) ;
app.use("/api/driver" , require("./Routes/Driver")) ;
app.use("/api/malak" , require("./Routes/Malak")) ;
app.use("/api/maidan" , require("./Routes/Maidan")) ;
app.use("/api/message" , require("./Routes/Message")) ;



app.listen(PORT || 5000 , ()=>{
    console.log("Connected to server Succesfully at Port ",PORT)
})