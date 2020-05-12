import React from 'react'
import SEO from './SEO'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
const ReactMarkdown = require('react-markdown')

const ArticleRead = props => {
  const { article } = props
  console.log(props)
  return (
    <div className="position-absolute p-3" style={{ left: 430, lineHeight: "1.7rem" }}>
      <SEO title={article.title} location={props.match.url} author={article.author.name}/>
      <div className="tab-content" id="nav-tabContent">
        <ReactMarkdown source={article.description} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  article: state.article.tempArticle
})

export default withRouter(connect(mapStateToProps)(ArticleRead))