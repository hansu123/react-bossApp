import { userModel } from "@/models"
import storage from "@/utils/storage"
//异步函数token
export const getToken = (data) => {
  return (dispatch) => {
    userModel.login(data).then((res) => {
      if (res.data.code === 1) {
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
        console.log("登录失败")
      }
    })
  }
}

export const getUserInfo = () => {
  return (dispatch) => {
    let data = {
      userName: "hansu",
      password: "199633"
    }
    userModel.login(data).then((res) => {
      let action = {
        type: "SET_USERINFO",
        payload: res.data.userInfo
      }
      dispatch(action)
    })
  }
}