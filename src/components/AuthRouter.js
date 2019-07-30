import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"


function AuthRouter(){


  
}
@withRouter
class AuthRouter extends Component {
  componentWillMount(){
    let path=this.props.location.pathname
    console.log(path)
    if(path!=="/login"){
      if(this.props.token){
        this.props.history.push(path)
      }
      else{
        console.log("ss")
        this.props.history.push("/login")
      }
    }
  }
  render() {
    return (
      <React.Fragment>
       
      </React.Fragment>
    )
  }
}
const mapStateToProps=(state)=>{
return {
  token:state.user.token
}
}
export default connect(mapStateToProps)(AuthRouter)