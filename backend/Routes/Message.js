
const express = require("express");
const Message = require("../models/Message");
const router = express.Router();


router.get("/get" , async(req ,res)=>{
    try{
        console.log("rejv") ;
        // const arr = await Message.find() ;
    const arr1 = JSON.stringify(arr) ;
    res.status(200).send(arr1) ;
    }catch(error)
    {
        res.status(500).send({Error:"Internal Server Error" , error}) ;
    }
} )
router.post("/insert" , async(req ,res)=>{
    console.log("gre") ;
    try{
        const {name , email , phone ,message} = req.body ;
        console.log(name , email ,phone , message) ;
        const ms1 = await Message.create({name : name , email:email ,phone:phone , message:message}) ;
    res.status(200).send({succes : true}) ;

    }catch(error)
    {
        res.status(500).send({Error:"Internal Server Error" , error}) ;
    }
} )

module.exports = router ;
