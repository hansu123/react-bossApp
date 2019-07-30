import React, { Component } from 'react'
import {List} from "antd-mobile"
const {Item}=List
export default class index extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[
        {id:1,title:"附件简历"},
        {id:2,title:"个人主页"},
        {id:3,title:"关注公司"},
        {id:4,title:"钱包"},
        {id:5,title:"帮助与反馈"},
      ]
    }
  }
  render() {
    return (
      <div style={{flex:"1",background:"#fff"}}>
        <List>
          {
            this.state.list.map((item)=>{
              return (
                <Item
                key={item.id}
                arrow="horizontal"
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                multipleLine
                onClick={() => {}}
              >
                {item.title}
              </Item>
              )
            })
          }
       
       
        </List>
      </div>
    )
  }
}
