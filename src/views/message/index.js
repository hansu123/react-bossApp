import React, { Component } from 'react'
import { List, Badge } from "antd-mobile"
import "./message.css"
const { Item } = List
const { Brief } = Item
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messageList: [
        { id: 1, nickName: "李女士", info: "hello", avatar: require("@/common/img/avatar/woman.png"), unRead:0,message: [] },
        { id: 2, nickName: "张先生", info: "可以发一份简历吗", avatar: require("@/common/img/avatar/bull.png"), unRead:6,message: [] },
        { id: 3, nickName: "郑先生", info: "你好，可以聊一聊吗", avatar: require("@/common/img/avatar/koala.png"), unRead:5,message: [] }
      ]
    }
  }
  startChat = () => {
    this.props.history.push("/chat")
  }

  render() {
    return (
      <div>
        <div><h3>联系人</h3></div>
        <List>
          {
            this.state.messageList.map((item) => {
              return (
                <Item key={item.id}
                  thumb={item.avatar}
                  multipleLine
                  extra={<Badge text={item.unRead}></Badge>}
                  onClick={() => { this.startChat(item.id) }}
                >
                  {item.nickName}<Brief>[送达]{item.info}</Brief>
                </Item>
              )
            })
          }
        </List>
      </div>
    )
  }
}
