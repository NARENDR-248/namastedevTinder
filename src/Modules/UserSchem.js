const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema({
    First_name: {
        type: String
    },
    last_name: {
        type: String
    },
    Father_name: {
        type: String
    },
    mother_name: {
        type: String
    }, gender: {
        type: String
    },
    age: {
        type: Number

    }

});
const User=Mongoose.model("user",userSchema);

module.exports=User