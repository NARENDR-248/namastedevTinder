const express=require('express');
const route=express.Router();

route.get('/',(req,res)=>{
    res.send("all users")
})
route.get('/:userID',(req,res)=>{
    console.log(req.params)
    res.send("userids")
});
route.post('/',(req,res)=>{
    res.send("user created")
})

module.exports=route;