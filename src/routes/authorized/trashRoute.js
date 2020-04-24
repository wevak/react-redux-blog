import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Trash from '../../container/Trash/Trash'

function TrashRoute(){
  return (
    <Switch>
      <Route path="/trash" component={Trash} />
    </Switch>
  )
}

export default TrashRoute