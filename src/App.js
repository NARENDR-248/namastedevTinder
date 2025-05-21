const express=require('express');
 const app =express();

//  const userRouters=require('./Routers/UserRoutes');
 const { AdminAuth ,userAuth} = require("./utils/Auth");


//  app.use('/user',userRouters);
// app.use("/test",(req,res,next)=>{
//    console.log("responece1")
   
   
//    next()

// },(req,res,next)=>{
//    console.log("2ed responece ");
//    next()
   
// },(req,res,next)=>{
//    console.log("this 3ed responce");
//    next()
// },(req,res,next)=>{
//    console.log("this is 4th responce ")
//    next()
// },(req,res)=>{
//    console.log("this is 5th responce ");
//    res.send("this is 5th responce ")
// })
app.use("/Admin",AdminAuth);
app.use("/user",userAuth);

app.get("/user/userlist",(req,res)=>{
   res.send("user is list")
})
app.post("/user/deleted",(req,res)=>{
   res.send("useris deleted")
})

 app.get("/Admin/users",(req,res)=>{
   res.send("user list")
   console.log("user router")
 });
 app.get("/Admin/deleteUser",(req,res)=>{
   res.send("user was delete")
 })


 app.listen(7777,()=>{
    console.log("the server is runing sucessfull")
 })