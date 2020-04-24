import React from 'react'
import ArticleRouter from './articleRoute'
import Sidebar from '../../container/Sidebar'
import ProfileRouter from './profileRoute'
import FavouritesRoute from './favouritesRoute'
import TrashRoute from './trashRoute'

function AuthorizedRoutes() {
  return (
    <div>
      <Sidebar />
      <ArticleRouter />
      <ProfileRouter />
      <FavouritesRoute />
      <TrashRoute />
    </div>
  )
}

export default AuthorizedRoutes