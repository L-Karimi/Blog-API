const mongoose = require('mongoose')
const userSchema= new mongoose.schema({
    username :String,
    email:String,
    password:String,
    registrationDate:{type:Date,default:Date.now},

})
module.exports=mongoose.model
{'User',userSchema
}