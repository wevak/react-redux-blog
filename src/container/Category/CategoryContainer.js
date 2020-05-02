import React from 'react'
import { connect } from 'react-redux'
const ReactMarkdown = require('react-markdown')

const CategoryContainer = props => {
  const { articles } = props
  return (
    <div className="position-absolute p-3" style={{ left: 430, lineHeight: "1.7rem" }}>
      <div className="tab-content" id="nav-tabContent">
        {articles.map((article, indx) => {
          const showActiveOnLoad = indx !== 0 ? '' : 'show active'  //First article description is shown as active by default
          return (
            <div key={article.id} className={`tab-pane fade text-justify ${showActiveOnLoad}`} id={`list-${article.id}`} role="tabpanel" aria-labelledby="list-settings-list">
              <ReactMarkdown source={article.description} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const {article, session} = state
  return {
    articles: article.articles.filter(article => article.author.id === session.currentlyLoggedIn.id)
  }
}

export default connect(mapStateToProps)(CategoryContainer)