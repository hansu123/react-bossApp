import Request from "@/utils/request"
class UserModel extends Request{
  login(data){
    return this.post("/user/login",data)
  }
}

export default new UserModel()