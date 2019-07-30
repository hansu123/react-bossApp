import React, { Component } from 'react'
import { InputItem, Button, Radio } from 'antd-mobile';
import { createForm } from 'rc-form';
import connect from "@/utils/connect"

import "./index.scss"
const { RadioItem } = Radio
@connect
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "管理员",
      radioData: [
        { value: 0, label: '管理员' },
        { value: 1, label: '普通用户' },
      ]
    }
  }
  login = () => {
    let data = this.props.form.getFieldsValue() //获取input的值
    this.props.getToken(data).then((data)=>{
      console.log(data)
      this.props.history.push("/")
    })
    
 
  }
  componentWillMount() {
    console.log(this.props.history)
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        
        <div className="login_content">
          <div>
            <h2>账号登录</h2>
            <InputItem
              {...getFieldProps('userName')}
              clear
              placeholder="用户名"
              ref={el => this.autoFocusInst = el}
            >用户名</InputItem>
            <InputItem
              {...getFieldProps('password')}
              clear
              placeholder="密码"
              ref={el => this.autoFocusInst = el}
            >密码</InputItem>

            {this.state.radioData.map(i => (
              <RadioItem key={i.value} checked={this.state.type === i.value} >
                {i.label}{i.extra}
              </RadioItem>
            ))}
            <Button type="primary" style={{ background: "#ccc" }} onClick={this.login}>登录</Button>
          </div>
        </div></div>
    )
  }
}


const LoginComp = createForm()(Login);

export default LoginComp