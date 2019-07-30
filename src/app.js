import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import TabBarComp from "@/components/TabBar"
import "./app.css"
@withRouter
class app extends Component {
  render() {
    const array=['/','/dashboard','/compony','/message','/my']  //区分哪些不需要tabbar
    return (
      <div className="dashboard_wrap">
        <div className="dashboard_content">
          {this.props.children}
          {/* router-view */}
        </div>
        {
          array.includes(this.props.location.pathname)?<TabBarComp></TabBarComp>:null
        }
      </div>
    )
  }
}
export default app
