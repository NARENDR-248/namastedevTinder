const express = require('express');
const app = express();
const conactDB = require("./config/database");
const User = require("./Modules/UserSchem")


app.post("/singup", async (req, res) => {
   const new_user = User({
      First_name: "VenkatNarayana",
      last_name: "kadiveti",
      Father_name: "prabha",
   })
   try{
        await new_user.save()
   res.send("user was sucefully created")

   }catch(err){
       res.send("something worng"+err.massage)
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

