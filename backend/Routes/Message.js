<<<<<<< HEAD
const router = require("express").Router() ;
const Message = require("../models/Message") ;

router.get("/getall" , async(req ,res)=>{
    
    const arr = await Message.find() ;
    res.send(arr) ;

})

router.post("/insert" , async(req,res)=>{
    const Name = req.body.Name ;
    const Mobile = req.body.Mobile ;
    const Message1 = req.body.Message ;

    const mess = await Message.create({Name , Mobile , Message:Message1}) ;
    res.send(mess) ;
})


module.exports = router ;
=======

const express = require("express");
const Message = require("../models/Message");
const router = express.Router();


router.get("/get" , async(req ,res)=>{
    try{
        console.log("rejv") ;
        const arr = await Message.find() ;
    const arr1 = JSON.stringify(arr) ;
    res.send(arr1) ;
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
>>>>>>> 091138055e5912d19d41d0ac554afad795cd9fdf
