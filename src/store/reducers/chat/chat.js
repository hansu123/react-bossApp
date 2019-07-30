import {SET_RECIVECHAT,SET_CHATLIST} from "@/store/actionTypes"

let defaultState={
  msgList:[]
}




const chatReducer=(state=defaultState,action)=>{

let {type,payload}=action
switch(type){
  case SET_CHATLIST:
  let unreadNum=payload.filter((item)=>{return !item.unread}).length
  return {...state,msgList:[...payload],unread:unreadNum};
  case SET_RECIVECHAT:
  // payload.read=true;
  return {...state,msgList:[...state.msgList,payload],unread:state.unread+1}
  default:return state
}

}

export default chatReducer