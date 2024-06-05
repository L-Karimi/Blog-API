const mongoose =require('mongose')
const blogPostSchema= new mongoose.schema({
    title:String,
    content:String,
    tags:[String],
    author:{type:mongoose.Schema.types.objecetsId,ref:'User'},
    creationDate:{type:Date,default:Date.now},
})
module.exports=mongoose.model
{'BlogPost',blogPostSchema}