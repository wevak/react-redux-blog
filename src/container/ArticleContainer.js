import React from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'

const ArticleContainer = props => {
  const { articles } = props
  return (
    <div className="position-absolute p-3" style={{ left: 430, lineHeight: "1.7rem" }}>
      <div className="tab-content" id="nav-tabContent">
        {articles.map((article, indx) => {
          return <Article article={article} indx={indx} />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  articles: state.article.articles.filter(article => article.author.id === state.session.currentlyLoggedIn.id)
})

export default connect(mapStateToProps)(ArticleContainer)