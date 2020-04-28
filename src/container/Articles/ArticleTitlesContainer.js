import React from 'react'
import { connect } from 'react-redux'
import { articleUpdate, articleDelete, articleFavourite } from '../../redux'
import $ from 'jquery'

class ArticleTitles extends React.Component {
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
        <div className="list-group list-group-flush" id="list-tab" role="tablist">
          {articles.map((article, indx) => {
            const active = indx !== 0 ? '' : 'active' //First article in the list is set active
            const favouriteStyle = !article.favourite ? {} : { color: 'gold' }
            return (
              <a className={`d-flex justify-content-between list-group-item list-group-item-action ${active}`} key={article.id} id="list-settings-list" data-toggle="list" href={`#list-${article.id}`} role="tab" aria-controls="settings"
                style={titleWidthStyle}>
                <i className="las la-star pt-1 mr-1"
                  onClick={() => this.handleArticleFavourite(article.id)}
                  style={favouriteStyle}></i>
                <div>{article.title}</div>
                <div className="d-flex flex-column">
                  <i className="las la-trash-alt" onClick={() => this.handleArticleDelete(article.id)}></i>
                  <i className="las la-pen" data-toggle="modal" data-target="#articleForm" onClick={() => this.handleArticleFormShow(article.id)}></i>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { article, session } = state
  return {
    articles: article.articles.filter(article => article.author.id === session.currentlyLoggedIn.id)
  }
}

export default connect(mapStateToProps)(ArticleTitles)