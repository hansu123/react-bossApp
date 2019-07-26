import React, { Component } from 'react'
import {createForm} from "rc-form"
import io from "socket.io-client"
import {InputItem,Button} from "antd-mobile"
import "./chat.css"
const socket=io("ws://localhost:8989")

class chat extends Component {
  constructor(props){
    super(props)
    this.state={
    message:[],
    text:""
    }
  }
  sendMessage=()=>{
    let d=this.props.form.getFieldsValue()
    socket.emit("sendMsg",{
      text:d.message
    })
    this.setState({
      text:""
    })
  }
  componentDidMount(){
    socket.on("reply",(data)=>{
      this.setState((prevState)=>{
        return {
          message:[...prevState.message,data.text]
        }
      })
    })
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="chat_wrap">
        {
          this.state.message.map((item,index)=>{
            return <p key={index}>{item}</p>
          })
        }
        <div className="chat_bar">
        <InputItem
            {...getFieldProps('message')}
            extra={<Button type="primary" size="small" onClick={this.sendMessage}>发送</Button>}
          ></InputItem>
        </div>
      </div>
    )
  }
}
export default createForm()(chat)