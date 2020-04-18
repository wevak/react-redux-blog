import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../../container/Dashboard'

function DashboardRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Redirect exact from="*" to='/'/>
    </Switch>   
  )
}

export default DashboardRouter