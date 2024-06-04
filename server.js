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



//connected app to MOngoDB using Mongoose
const dotenv=require("dotenv")
dotenv.config();
const DATABASE_URL =process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL,{useNewUParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log("Server is connected to db")
})
.catch((error)=>{
  console.error("Error connecting to DB:",error)
});