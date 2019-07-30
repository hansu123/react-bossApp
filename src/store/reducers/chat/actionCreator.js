import io from "socket.io-client"
import {chatModel} from "@/models"
const socket=io("ws://localhost:8989")

export const getChatList=()=>{
  return async(dispatch)=>{
    let res=await chatModel.getChatList()
    const action={
        type:"SET_CAHTLIST",
        payload:res.data
    }
    dispatch(action)
    return res.data
  }
}


export function sendMsg(data){
  return (dispatch)=>{
    console.log(data)
    socket.emit("sendMsg",{
      ...data
    })
  }
}

export const reciveMsg=()=>{
  return (dispatch)=>{
    socket.on("reply",(data)=>{
      const action={
        type:"SET_RECIVECHAT",
        payload:data
      }
      console.log(action)
      dispatch(action)
    })
    return Promise.resolve()
  }
}