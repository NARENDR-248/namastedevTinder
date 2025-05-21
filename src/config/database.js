const mongoose = require("mongoose");

const conactDB = async() => {
    await mongoose.connect("mongodb+srv://kadivetinarendra2021:knNBRmaer6fyu3zZ@cluster0.dzpppic.mongodb.net/DevTinder");
}
module.exports= conactDB


