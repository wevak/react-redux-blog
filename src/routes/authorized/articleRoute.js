import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Article from '../../container/Articles/Article'

function ArticleRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Article} />
    </Switch>
  )
}

export default ArticleRouter