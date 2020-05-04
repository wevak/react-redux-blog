import React from 'react'
import { connect } from 'react-redux'
const ReactMarkdown = require('react-markdown')

const CategoryContainer = props => {
  return (
    <div className="position-absolute p-3" style={{ left: 430, lineHeight: "1.7rem" }}>
      <div className="tab-content" id="nav-tabContent">
        <ReactMarkdown source={props.article.description} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    article: state.article.tempArticle
  }
}

export default connect(mapStateToProps)(CategoryContainer)