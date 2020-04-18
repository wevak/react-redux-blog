import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from '../../container/LandingPage'

function LoginRouter(){
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Redirect from="*" to='/'/>
    </Switch>
  )
}

export default LoginRouter;