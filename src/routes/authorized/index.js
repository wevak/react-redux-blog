import React from 'react'
import ArticleRoute from './articleRoute'
import Sidebar from '../../container/Sidebar'
import ProfileRoute from './profileRoute'
import FavouritesRoute from './favouritesRoute'
import TrashRoute from './trashRoute'
import CategoryRoute from './categoryRoute'

function AuthorizedRoutes() {
  return (
    <div>
      <Sidebar />
      <ArticleRoute />
      <ProfileRoute />
      <FavouritesRoute />
      <TrashRoute />
      <CategoryRoute />
    </div>
  )
}

export default AuthorizedRoutes