import React,{Component} from "react"
import {withRouter} from "react-router-dom"
import connect from "@/utils/connect"
@connect
@withRouter
class AuthRouter extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
 
componentDidMount() {
    let data={
      userName:"lilei",
      password:"199633"
    }
    this.props.getUserInfo(data).then((data)=>{
       this.props.history.push(this.props.location.pathname)
    })
  }
  render(){
      return (
      <React.Fragment></React.Fragment>
      )
  }
}

export default AuthRouter