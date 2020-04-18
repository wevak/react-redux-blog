import React from 'react'
import Sidebar from './Sidebar'
import ArticleTitles from './ArticleTitlesContainer'
import ArticleContainer from './ArticleContainer'

function Dashboard() {
  return (
    <div className="position-relative">
      <Sidebar />
      <ArticleTitles />
      <ArticleContainer />
    </div>
  )
}

export default Dashboard