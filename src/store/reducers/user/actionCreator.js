import { userModel } from "@/models"
import storage from "@/utils/storage"
import {Toast} from "antd-mobile"
//异步函数token
export const getToken = (data) => {
  return async (dispatch) => {
    let res=await userModel.login(data)
    if (res.data.code) {
        Toast.info("登录成功")
        //存储token
        let { token } = res.data
        storage.set("token", token)
        //设置store中token的值
        let action = {
          type: "SET_TOKEN",
          payload: token
        }
        dispatch(action)
      }
      else{
        Toast.info("用户名或密码错误")
      }
    return res.data
  }
}

export const getUserInfo = (data) => {
  return async (dispatch) => {
    let res=await userModel.GetUserInfo(data)
    if(res.data.code){
        let userInfo=res.data.userInfo
        storage.set("userInfo",userInfo)
        let action = {
          type: "SET_USERINFO",
          payload: userInfo
        }
        dispatch(action)
      }
      else{
        Toast.info("获取用户信息失败")
      }
    return res.data
  }
}