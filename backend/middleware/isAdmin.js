
const isAdmin = (req,res ,next)=>{
    try{
        console.log(req.body) ;
        next(); 
    }catch(error)
    {
        res.status(400).send({message : "Internal Server Error" , error }) ;
    } 
}

module.exports = isAdmin ;



