const mongoose =require('mongose')
const commentSchema= new mongoose.schema({
    commenter:String,
    text:String,
    blogPost:{type:blogPostSchema.objectId,ref:'BlogPost'},
    creationDate:{type:Date,default:Date.now},
})
module.exports=mongoose.model
{'Comment',commentSchema}