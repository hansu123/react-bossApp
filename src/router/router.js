import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import {connect} from "react-redux"
import App from "@/app"
import Dashboard from "@/views/dashboard"
import Login from "@/views/login"
import Compony from "@/views/compony"
import Message from "@/views/message"
import Chat from "@/views/chat"
import My from "@/views/my"
class RouterComp extends Component {
  render() {
    console.log(this.props.token)
    return (
      <div>
          <Router>
          <App>
            <Switch>
              <Route path="/login" component={Login} />
              {this.props.token?
                <Route path="/" exact component={Dashboard} />
                : <Redirect to="/login"></Redirect>
              }
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/compony" component={Compony}/>
              <Route path="/message" component={Message}/>
              <Route path="/chat" component={Chat}/>
              <Route path="/my" component={My}/>
            </Switch>
            </App>
          </Router>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    token:state.user.token
  }
}
export default connect(mapStateToProps,null)(RouterComp)