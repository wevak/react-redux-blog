import React from 'react'
import { connect } from 'react-redux'
const ReactMarkdown = require('react-markdown')

const ArticleRead = props => {
  const { article } = props
  return (
    <div className="position-absolute p-3" style={{ left: 430, lineHeight: "1.7rem" }}>
      <div className="tab-content" id="nav-tabContent">
        <div>
          <ReactMarkdown source={article.description} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { article } = state
  return {
    article: article.tempArticle
  }
}

export default connect(mapStateToProps)(ArticleRead)