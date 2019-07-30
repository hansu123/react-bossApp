import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import connect from "@/utils/connect"
import App from "@/app"
import routers from "@/config/router"
import AuthRouter from "./authRouter"



@connect
class RouterComp extends Component {
  handleGetUserInfo(){
    this.props.getUserInfo()
  }
  render() {
    let {state}=this.props
    return (
      <div>
        <Router>
          <App>
            <Switch>
              {
                routers.map((router) => {
                  if (router.meta.auth) {
                    if (state.user.token) {
                      if(state.user.userInfo){
                        if (router.path === "/") {
                          return (<Route exact path={router.path} key={router.path} render={() => { return <Redirect to={router.redirect}></Redirect> }} />)
                        }
                        return (<Route path={router.path} exact component={router.component} key={router.path} />)
                      }
                      else{
                        return <AuthRouter></AuthRouter>
                      }
                    }
                    else {
                      return <Redirect to="/login"></Redirect>
                    }
                  }
                  return (<Route path={router.path} exact component={router.component} key={router.path} />)
                })
              }
            </Switch>
          </App>
        </Router>
      </div>
    )
  }
}

export default RouterComp