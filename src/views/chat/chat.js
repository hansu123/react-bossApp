import React, { Component } from 'react'
import {InputItem,Button} from "antd-mobile"
export default class chat extends Component {
  render() {
    return (
      <div>
        <div style={{display:"flex",position:"fixed",bottom:"10px",left:"0",right:"0",height:"40px",alignItems:"center"}}>
        <InputItem></InputItem><Button inline>发送</Button>
        </div>
      </div>
    )
  }
}
