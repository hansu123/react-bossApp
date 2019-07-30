const express=require("express")
const app=express()
const cors =require("cors")
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

//想要直接获取post数据
//解析application/json或者前台使用qs
app.use(bodyParser.json())

const mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost/boss', {useNewUrlParser: true});

const router =express.Router()
mongoose.connection.on("error", function() {
  console.log("error");
});
mongoose.connection.on("open", function() {
  console.log("success");
});


const server =require('http').Server(app)

const io=require('socket.io')(server)

server.listen(8989,()=>{
  console.log("listening")
})


//挂载user下的router
const userRouter=require("./routes/user")
app.use('/user',userRouter)

const chatRouter=require("./routes/chat")
app.use('/chat',chatRouter)

const jobRouter=require("./routes/job")
app.use('/job',jobRouter)

chatRouter.io(io)
