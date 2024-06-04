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