import React, { Component } from 'react'

import {Button} from "antd-mobile"
export default class index extends Component {
  startChat=()=>{
   this.props.history.push("/chat")
  }
  
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.startChat}>立即沟通</Button>
      </div>
    )
  }
}
