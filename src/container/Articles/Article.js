import React from 'react'
import ArticleTitles from './ArticleTitlesContainer'
import ArticleContainer from './ArticleContainer'

function Article() {
  return (
    <div className="position-relative">
      <ArticleTitles />
      <ArticleContainer />
    </div>
  )
}

export default Article