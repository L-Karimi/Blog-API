const express = require("express");
const mongoose = require("mongoose");
const app =express();


app.get('/',(req,res)=>{

  res.send("Hello my name is Lucy and am tryna practise this thing ")
});

const PORT =process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log("Server is running on ${PORT}");
});


const dotenv=require("dotenv")
dotenc.config();
const DATABASE_URL =process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL,{useNewParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log("Server is connected to db")
})
.catchError((err)=>{
  console.log("Error connecting to DB:",error)
});