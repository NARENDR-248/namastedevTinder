const express = require('express');
const app = express();
const conactDB = require("./config/database");
const User = require("./Modules/UserSchem")
app.use(express.json())





app.get("/user", async (req, res) => {
   const User_father = req.body.Father_name;
   try {
      const user_fater = await User.findOne({ Father_name: User_father })
      if (!user_fater) {
         res.send("usernot ")

      }
      else {
         res.send(user_fater);
         console.log(user_fater)

      }



   } catch {
      res.status(401).send("someting went worng")
   }

})
app.get("/feed", async (req, res) => {
   try {
      const users = await User.find({});
      return res.send(users);
   }
   catch {
      return res.send("something worng" + err.massage)

   }


})

// deleted the user apii
app.delete("/user",async(req,res)=>{
   const userid=req.body.userid;
   try{
      const deletedUser=await User.findByIdAndDelete({_id:userid});
      if(!deletedUser){
         
      return res.status(404).send("User not found");

      }else{
           res.send("user is deleted")

      }
    
   }catch{
      return res.status(500).send("something wrong");

   }
})
app.patch("/user",async(req,res)=>{
   const userid=req.body.userid;
   const data=req.body;
   console.log(data)
   try {
    const user = await User.findByIdAndUpdate(userid, data, { new: true }); // `new: true` returns updated doc
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send("User is updated");
  } catch (err) {
    res.status(500).send("Something went wrong: " + err.message);
  }

   
})

app.post("/singup", async (req, res) => {
   console.log(req.body)

   const new_user = User(req.body)
   try {
      await new_user.save()
      return res.send("user was sucefully created")

   } catch (err) {
      return res.send("something worng" + err.massage)
   }

})





conactDB().then(() => {
   console.log("db is succfull");
   app.listen(7777, () => {
      console.log("the server is runing sucessfull")
   })
}).catch((err) => {
   console.log("something worng")
})

