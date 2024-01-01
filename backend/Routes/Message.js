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