import React, { Component } from 'react'
import io from "socket.io-client"
import {Button} from "antd-mobile"
export default class index extends Component {
  startChat=()=>{
   this.props.history.push("/chat")
  }
  componentDidMount(){
   const socket=io("ws://localhost:8989")
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.startChat}>立即沟通</Button>
      </div>
    )
  }
}
