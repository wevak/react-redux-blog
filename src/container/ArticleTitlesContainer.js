import React from 'react'
import { connect } from 'react-redux'
import { articleUpdate, articleDelete } from '../redux'
// import ArticleLink from '../components/ArticleLink'
import $ from 'jquery'

class ArticleTitles extends React.Component{
  constructor(props) {
    super(props);
    this.handleArticleUpdate = this.handleArticleUpdate.bind(this)
    this.handleArticleDelete = this.handleArticleDelete.bind(this)
    this.handleArticleFormShow = this.handleArticleFormShow.bind(this)
  }
  handleArticleDelete(id){
    this.props.dispatch(articleDelete(id))
  }
  handleArticleUpdate(id){
    this.props.dispatch(articleUpdate(id))
  }
  handleArticleFormShow(){
    $("#articleForm").modal('show');
  }
  render(){
    return (
      <div className="d-flex position-fixed bg-light" style={{ left: 190, height: "100%", minWidth: 240 }}>
        <div className="list-group rounded-0" id="list-tab" role="tablist">
          {this.props.articles.map((article, indx) => {
            const active = indx !== 0 ? '' : 'active' //First article in the list is set active
            return (
              <a className={`d-flex list-group-item list-group-item-action ${active}`} key={article.id} id="list-settings-list" data-toggle="list" href={`#list-${article.id}`} role="tab" aria-controls="settings">
                <i className="lar la-star pt-1 mr-1"></i>
                <div>{article.title}</div>
                <div className="d-flex flex-column">
                  <i className="las la-trash-alt" onClick={() => this.handleArticleDelete(article.id)}></i>
                  <i className="las la-pen" data-toggle="modal" data-target="#articleForm" onClick={() => this.handleArticleFormShow(article)}></i>
                </div>
              </a>
            )
          })}
          
          {/* <ArticleLink
            onArticleDelete = {this.handleArticleDelete}
            onArticleFormShow = {this.handleArticleFormShow}
            article = {article}
            active = {active}
          /> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  articles: state.articles.filter(article => article.author.id === state.session.currentlyLoggedIn.id)
})

export default connect(mapStateToProps)(ArticleTitles)