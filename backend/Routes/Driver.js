const express = require("express") ;
const Bull = require("../models/Bail")
const router = express.Router() ;
const isAdmin = require("../middleware/isAdmin") ;

router.get("/getall" , async (req ,res)=>{
    const bails = await Bull.find() ;
    res.send(bails) ;
} ) ;

router.get("/getdistrict" , async(req , res)=>{
    
    const bails = await Bull.find({"Address.District" : req.query.District }) ;
    res.send(bails) ;
})

router.get("/get" , async(req , res)=>{
    
    const bails = await Bull.find({name : req.query.name , "Address.District" : req.query.District  }) ;
    res.send(bails) ;
})

router.post("/insert" ,isAdmin ,async(req , res)=>{
    const ele = await Bull.create(req.body) ;
    console.log("arf") ;
    res.send(ele) ;
} ) 

router.post("/edit" , async(req ,res)=>{

    const name  = req.body.name ;
    const name1 = req.body.name1 ; 
    console.log(req.body) ;
    const bull = Bull.updateMany({name } , {name:name1})
    
    // console.log(bull) ;
    res.send("rnd") ;
})

router.post("/remove" , async(req , res)=>{
    const name = req.body.name;

    const bull = Bull.delete({name:name}) ;
    console.log(bull);
    res.send("Done") ;
})



module.exports = router; 