const express =require("express")
const router =express()
const mongoose =require("mongoose")
const schema=new mongoose.Schema({
  position:{
  type:Object,
  required:true
  },
  recruiter:{
  type:Object,
  required:true
  },
  tags:{
  type:Object,
  required:true
  }
})


const jobModel=mongoose.model("jobs",schema)



router.get("/list",(req,res)=>{
  jobModel.find({}).then((data)=>{
    return res.send({
     list:data
    })
  })
})

module.exports=router

