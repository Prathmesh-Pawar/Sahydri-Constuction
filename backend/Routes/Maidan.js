const router = require("express").Router() ;
const Maidan = require("../models/Maidan");


router.get("/getall" , async(req , res)=>{
    const arr = await Maidan.find() ;
    res.send(arr) ;
}) ;


router.get("/insert" , async(req , res)=>{
    const ele = await Maidan.create(req.body) ;
    res.send(ele) ;
}) ;


router.get("/get" , async(req , res)=>{
    const arr = await Maidan.find() ;
    res.send(arr) ;
}) ;


router.get("/edit" , async(req , res)=>{
    const arr = await Maidan.find() ;
    res.send(arr) ;
}) ;


router.get("/remove" , async(req , res)=>{
    const arr = await Maidan.find() ;
    res.send(arr) ;
}) ;

module.exports = router ;
