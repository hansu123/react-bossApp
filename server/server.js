const express=require("express")
const app=express()

const server =require('http').Server(app)

const io=require('socket.io')(server)

io.on('connection',(socket)=>{
  console.log(1)
  socket.on("sendMsg",(data)=>{
    console.log(data)
    io.emit("reply",data)
  })
})

server.listen(8989,()=>{
  console.log("listening")
})
