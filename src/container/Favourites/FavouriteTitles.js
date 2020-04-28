import React from 'react'
import { connect } from 'react-redux'
import { articleRead } from '../../redux'

const FavouriteTitles = props => {
  const { articles } = props
  const titleWidthStyle = { width: 240 }
  return (
    <div className="d-flex position-fixed bg-light" style={{ left: 190, height: "100%", maxWidth: 240, backgroundColor: "#e5e5e5" }}>
      <div className="list-group">
        {articles.map(article => {
          const active = props.activeArticleTitleId !== article.id ? '' : 'active'
          return (
            <button key={article.id}
              onClick={() => props.dispatch(articleRead(article.id))}
              className={`list-group-item list-group-item-action rounded-0 ${active}`}
              style={titleWidthStyle}
            >
              {article.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { article, session } = state
  return {
    articles: article.articles.filter(article => article.favourite && article.author.id === session.currentlyLoggedIn.id),
    activeArticleTitleId: article.tempArticle.id
  }
}

export default connect(mapStateToProps)(FavouriteTitles)