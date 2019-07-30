const express = require("express")

const router = express.Router()

const mongoose = require("mongoose")
const schema = new mongoose.Schema({
  chatId:{
  type:String,
  required:true
  },
  nickName:{

  },
  info:{

  },
  unRead:{
    
  },
  avatar:{
    type:String,
    required:true
  }
});
var chatModel = mongoose.model('chats', schema);

router.get("/list",(req,res)=>{
  chatModel.find({}).then((result)=>{
    res.send(result)
  })
})
router.io=(io)=>{
  io.on('connection',(socket)=>{
    
    socket.on("sendMsg",(data)=>{
      data.chatId=data.from+data.to
      chatModel.create({...data}).then((result)=>{
        console.log(result)
      })
      io.emit("reply",data)
    })
  })
  
}




module.exports = router
