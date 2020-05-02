import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Category from '../../container/Category/Category'

function CategoryRoute() {
  return (
    <Switch>
      <Route path="/category/:categoryId" component={Category} /> {/* Pass the category identity to Category Container */}
    </Switch>
  )
}

export default CategoryRoute