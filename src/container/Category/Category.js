import React from 'react'
import CategoryTitles from './CategoryTitlesContainer'
import ArticleRead from '../ArticleRead'

function Category({ match }) {
  return (
    <div className="position-relative">
      <CategoryTitles match={match}/>
      <ArticleRead />
    </div>
  )
}

export default Category