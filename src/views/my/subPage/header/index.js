import React, { Component } from 'react'
import "./index.scss"
export default class index extends Component {
  render() {
    return (
      <div className="header_wrap">
        <div className="header_top">
          <div className="header_top_left">
              <p style={{fontSize:"20px"}}>lilei</p>
              <p>我的在线简历</p>
          </div>
          <div className="header_top_right">
            <img src="https://hansu-1253325863.cos.ap-shanghai.myqcloud.com/react/boss/user/boy.png" alt="头像"></img>
          </div>
        </div>
        <div className="header_content">
          <dl>
            <dt>
              418
            </dt>
            <dd>
              沟通过
            </dd>
          </dl>
          <dl>
            <dt>
              0
            </dt>
            <dd>
              待面试
            </dd>
          </dl>
          <dl>
            <dt>
              25
            </dt>
            <dd>
              已投简历
            </dd>
          </dl>
          <dl>
            <dt>
              37
            </dt>
            <dd>
              收藏
            </dd>
          </dl>
        </div>
      </div>
    )
  }
}
