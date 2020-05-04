import React from 'react'
import { connect } from 'react-redux'
import { articleUpdate, articleDelete, articleFavourite, articleRead } from '../../redux'
import $ from 'jquery'

class CategoryTitles extends React.Component {
  constructor(props) {
    super(props)
    this.handleArticleUpdate = this.handleArticleUpdate.bind(this)
    this.handleArticleDelete = this.handleArticleDelete.bind(this)
    this.handleArticleFavourite = this.handleArticleFavourite.bind(this)
    this.handleArticleFormShow = this.handleArticleFormShow.bind(this)
  }
  handleArticleDelete(id) {
    this.props.dispatch(articleDelete(id))
  }
  handleArticleUpdate(id) {
    this.props.dispatch(articleUpdate(id))
  }
  handleArticleFavourite(articleId) {
    this.props.dispatch(articleFavourite( articleId ))
  }
  handleArticleFormShow(articleId) {
    this.props.dispatch({ type: 'ARTICLE_LOAD', payload: { articleId } })
    $("#articleForm").modal('show')
  }
  render() {
    const { articles } = this.props
    const titleWidthStyle = { width: 240 }
    return (
      <div className="d-flex position-fixed bg-light" style={{ left: 190, height: "100%", maxWidth: 240, backgroundColor: "#e5e5e5" }}>
        <div className="list-group list-group-flush" >
          {articles.map(article => {
            const active = this.props.activeArticleTitleId !== article.id ? '' : 'active'
            const favouriteStyle = !article.favourite ? {} : { color: 'gold' }
            return (
              <button
                key={article.id}
                className={`d-flex justify-content-between list-group-item list-group-item-action ${active}`}
                onClick={() => this.props.dispatch(articleRead(article.id))}
                style={titleWidthStyle}>
                <i className="las la-star pt-1 mr-1"
                  onClick={() => this.handleArticleFavourite(article.id)}
                  style={favouriteStyle}></i>
                <div>{article.title}</div>
                <div className="d-flex flex-column">
                  <i className="las la-trash-alt" onClick={() => this.handleArticleDelete(article.id)}></i>
                  <i className="las la-pen" data-toggle="modal" data-target="#articleForm" onClick={() => this.handleArticleFormShow(article.id)}></i>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { article } = state
  return {
    articles: article.articles.filter(article => article.category.toLowerCase() === ownProps.match.params.categoryId),
    activeArticleTitleId: article.tempArticle.id || ''
  }
}

export default connect(mapStateToProps)(CategoryTitles)