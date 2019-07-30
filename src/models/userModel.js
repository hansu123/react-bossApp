import Request from "@/utils/request"
class UserModel extends Request{
  login(data){
    return this.post("/user/getToken",data)
  }
  GetUserInfo(data){
    return this.post("/user/userInfo",data)
  }
}

export default new UserModel()