const express = require("express")

const router = express.Router()

const mongoose = require("mongoose")
const schema = new mongoose.Schema({
  userName: String,
  password: String,
  sex: Boolean,
  avatar: String
});
var userModel = mongoose.model('users', schema);
// userModel.create({userName:"hanmeimei",password:"199633",sex:1,avatar:"https://hansu-1253325863.cos.ap-shanghai.myqcloud.com/react/boss/user/girl.png"}, function (res) {
//   console.log(res)
// });
router.post("/getToken", (req, res) => {
  let {userName,password}=req.body
  console.log(userName,password)
  userModel.find({userName,password}).then((result)=>{
    console.log(result)
    if(result.length){
      res.send({
        code: 1,
        token: userName
      })
    }
    else{
      res.send({
        code:0
      })
    }
  })
})

router.post("/userInfo",(req,res)=>{
  let {userName}=req.body
  console.log(userName)
  userModel.find({userName}).then((result)=>{
    if(result.length){
      res.send({
        code: 1,
        userInfo:result[0]
      })
    }
    else{
      res.send({
        code:0
      })
    }
  })
})

module.exports = router
