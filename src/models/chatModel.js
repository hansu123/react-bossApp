import request from "@/utils/request"
class chatModel extends request{
  getChatList(){
   return this.get("/chat/list")
  }
}
export default  new chatModel()