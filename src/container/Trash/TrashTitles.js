import React from 'react'
import { connect } from 'react-redux'
import { articleTrashRead, articleTrashRestore } from '../../redux'

const TrashTitles = props => {
  const { articles } = props
  // const titleWidthStyle = { width: 240 }
  return (
    <div className="d-flex position-fixed bg-light" style={{ left: 190, height: "100%", maxWidth: 240, backgroundColor: "#e5e5e5" }}>
      <div className="list-group">
        {articles.map((article, indx, arr) => {
          const active = props.activeArticleTitleId !== article.id ? '' : 'active'
          return (
            <button key={article.id}
              onClick={() => props.dispatch(articleTrashRead(article.id))}
              className={`d-flex justify-content-between list-group-item list-group-item-action rounded-0 ${active}`}
              // style={titleWidthStyle}
            >
              {article.title}
              <i className="las la-undo-alt mt-1" onClick={() => props.dispatch(articleTrashRestore(article.id))}></i>
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
    articles: article.trash.filter(article => article.author.id === session.currentlyLoggedIn.id),
    activeArticleTitleId: article.tempArticle.id
  }
}

export default connect(mapStateToProps)(TrashTitles)