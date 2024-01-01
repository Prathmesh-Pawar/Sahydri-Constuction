const express = require("express") ;
const Malak = require("../models/Malak")
const router = express.Router() ;
const isAdmin = require("../middleware/isAdmin") ;

router.get("/getall" , async (req ,res)=>{
    const malaks = await Malak.find() ;
    res.send(malaks) ;
} ) ;

router.get("/getdistrict" , async(req , res)=>{
    
    const malaks = await Malak.find({"Address.District" : req.query.District }) ;
    res.send(malaks) ;
})

router.get("/get" , async(req , res)=>{
    
    const malaks = await Malak.find({name : req.query.name , "Address.District" : req.query.District  }) ;
    res.send(malaks) ;
})

router.post("/insert" ,isAdmin ,async(req , res)=>{
    const ele = await Malak.create(req.body) ;
    console.log("arf") ;
    res.send(ele) ;
} ) 

router.post("/edit" , async(req ,res)=>{

    const name  = req.body.name ;
    const name1 = req.body.name1 ; 
    console.log(req.body) ;
    const Malak = Malak.updateMany({name } , {name:name1})
    
    // console.log(Malak) ;
    res.send("rnd") ;
})

router.post("/remove" , async(req , res)=>{
    const name = req.body.name;

    const Malak = Malak.delete({name:name}) ;
    console.log(Malak);
    res.send("Done") ;
})



module.exports = router; 