import React, { Component } from 'react'
import TabBarComp from "@/components/tabBar"
import Header from "@/components/header"
import SearchBar from "@/components/searchBar"
import "./index.css"
export default class Dashborad extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="dashboard_wrap">
        <Header></Header>
        <div className="dashboard_content">
        <SearchBar></SearchBar>
        </div>
       
        <TabBarComp histroy={this.props}></TabBarComp>
      </div>
    )
  }
}
