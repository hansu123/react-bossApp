import React, { Component } from 'react'
import { Card, InputItem, Button, Radio } from 'antd-mobile';
import { createForm } from 'rc-form';
import { withRouter } from 'react-router';
import defaultAvatar from "./imgs/default-face.png"
const { RadioItem } = Radio
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      radioData: [
        { value: 0, label: '管理员' },
        { value: 1, label: '普通用户' },
      ]
    }
  }

  login=()=>{
    this.props.histroy.push({pathname:"/"})
  }



  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{ display: "flex", height: "100vh", flexDirection: "column", justifyContent: "center", padding: "0 10px" }}>

        <Card>
          <Card.Header
            title="用户登录"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          // extra={<span>this is extra</span>}
          />
          <Card.Body>
            <div>
              <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "10px 0" }}>
                <img src={defaultAvatar} alt="头像"></img>
              </div>
              <InputItem
                {...getFieldProps('userName')}
                clear
                placeholder="auto focus"
                ref={el => this.autoFocusInst = el}
              >用户名</InputItem>
              <InputItem
                {...getFieldProps('password')}
                clear
                placeholder="auto focus"
                ref={el => this.autoFocusInst = el}
              >密码</InputItem>
              {this.state.radioData.map(i => (
                <RadioItem key={i.value} checked={0 === i.value} >
                  {i.label}{i.extra}
                </RadioItem>
              ))}
              <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <Button type="primary" size="small" inline onClick={this.state.login}>登录</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
const LoginComp = createForm()(Login);

export default LoginComp