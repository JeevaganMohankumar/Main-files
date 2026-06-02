const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/portfolio");

const Project = mongoose.model("Project",{
title:String,
description:String,
technology:String
});

app.get("/projects",async(req,res)=>{
const data = await Project.find();
res.json(data);
});

app.listen(3000,()=>{
console.log("Server Running");
});
