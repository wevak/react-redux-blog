import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Favourites from '../../container/Favourites/Favourites'

function FavouritesRoute(){
  return (
    <Switch>
      <Route path="/favourites" component={Favourites} />
    </Switch>
  )
}

export default FavouritesRoute