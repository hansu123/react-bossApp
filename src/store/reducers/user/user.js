import {SET_TOKEN,SET_USERINFO} from "@/store/actionTypes"
import storage from "@/utils/storage"
let defaultState={
  token:storage.get("token",false),
  userInfo:storage.get("userInfo")
}
const userReducer=(state=defaultState,action)=>{
  let {type,payload} =action
  switch(type){
    case SET_TOKEN:
    return {...state,token:payload};
    case SET_USERINFO:
    return {...state,userInfo:payload};
    default:
    return state
  }
}

export default userReducer