import React from 'react'
import { connect } from 'react-redux'
import { articleTrashRead } from '../../redux'

const TrashTitles = props => {
  const { articles } = props
  const titleWidthStyle = { width: 240 }
  return (
    <div className="d-flex position-fixed bg-light" style={{ left: 190, height: "100%", maxWidth: 240, backgroundColor: "#e5e5e5" }}>
      <div className="list-group">
        {articles.map((article, indx) => {
          const active = indx !== 0 ? '' : 'active' //First article is set active by default on initial load
          return (
            <button key={article.id}
              onClick={() => props.dispatch(articleTrashRead(article.id))}
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
    articles: article.trash.filter(article => article.author.id === session.currentlyLoggedIn.id)
  }
}

export default connect(mapStateToProps)(TrashTitles)