import {SET_TOKEN} from "../actionTypes"
import storage from "@/utils/storage"
let defaultState={
  token:storage.get("token",false),
}
const userReducer=(state=defaultState,action)=>{
  let {type,payload} =action
  let newState={...state}
  switch(type){
    case SET_TOKEN:
    newState.token=payload;
    return newState;
    default:
    return state
  }
}

export default userReducer