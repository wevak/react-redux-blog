import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from '../../container/Profile'

function ProfileRouter() {
  return (
    <Switch>
      <Route exact path="/profile" component={Profile} />
    </Switch>
  )
}

export default ProfileRouter