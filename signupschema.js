const  mongoose  = require("mongoose")
require("./config")
const signupSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
module.exports= mongoose.model("signups",signupSchema);
