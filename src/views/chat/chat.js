import React, { Component } from 'react'
import connect from "@/utils/connect"
import { createForm } from "rc-form"
import { InputItem, Button,NavBar,Icon } from "antd-mobile"
import "./chat.scss"

@connect
class chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: [],
      text: "请输入..",
      recruiter:{}
    }
  }
  sendMessage = () => {
    let {user} =this.props.state
    let d = this.props.form.getFieldsValue()
    this.props.sendMsg(
      {
        from: user.userInfo.userName,
        to: "hanmeimei",
        content: d.message,
        avatar:user.userInfo.avatar
      }
    )
    this.setState({
      text: ""
    })
  }
  componentDidMount() {
    this.setState({
      recruiter:this.props.history.location.state.recruiter
    })
    this.props.getChatList().then(()=>{
      console.log(this.props.state.chat.unread)
    })
    this.props.reciveMsg().then(()=>{
      console.log(this.props.state.chat.unread)
    })
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="chat_wrap">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => {this.props.history.goBack()}}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >{this.state.recruiter.name}{this.state.recruiter.identity}</NavBar>
        <div className="chat_content">
        {
          this.props.state.chat.msgList.map((item, index) => {
            return item.from === this.props.state.user.userInfo.userName?(
                <div key={index} className="chat_item_right" >
                <p className="chat_item_text">{item.content}</p>
                <img src={this.props.state.user.userInfo.avatar} alt="chat_avatar" className="chat_item_avatar"></img>
                </div>
                ):(
                <div key={index} className="chat_item_left" >
                  <img src={item.avatar} alt="chat_avatar" className="chat_item_avatar"></img>
                  <p className="chat_item_text">{item.content}</p>
                </div>)
          }
          )
        }
        <div className="chat_bar">
          <InputItem defaultValue={this.state.text}
            {...getFieldProps('message')}
            extra={<Button type="primary" size="small" onClick={this.sendMessage}>发送</Button>}
          ></InputItem>
        </div>
        </div>
      </div>
    )
  }
}
export default createForm()(chat)