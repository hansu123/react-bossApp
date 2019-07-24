import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Dashboard from "@/views/dashboard"
import Login from "@/views/login"
export default class app extends Component {
  render() {
    return (
      <Router>
        <Link to="/dashboard">

        </Link>
        <Link to="/login">

        </Link>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>

      </Router>
    )
  }
}
