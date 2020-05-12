import React from 'react'
import ArticleForm from '../presentational/ArticleForm'
import { articleCreate, articleUpdate, articleReset } from '../redux'
import { connect } from 'react-redux'
import $ from 'jquery'
import { reset } from 'redux-form'

class ArticleFormContainer extends React.Component{
  constructor(props){
    super(props)
    this.handleArticleForm = this.handleArticleForm.bind(this)
    this.handleResetForm = this.handleResetForm.bind(this)
  }
  handleArticleForm(values){
    if(!this.props.tempArticle.id){
      this.props.dispatch(articleCreate({
        article: values,
        user: this.props.user
      }))
    }else{
      this.props.dispatch(articleUpdate({
        article: values,
        user: this.props.user
      }))
    }
    $('#articleForm').modal('hide')
    this.handleResetForm();
  }
  
  handleResetForm(){
    this.props.dispatch(articleReset())
    this.props.dispatch(reset("articleForm"))
  }

  render(){
    return (
      <ArticleForm
        onSubmitArticle = {this.handleArticleForm}
        onReset = {this.handleResetForm}
      />
    )
  }
}

const mapStateToProps = state => ({
  user: state.session.currentlyLoggedIn,
  tempArticle: state.article.tempArticle
})

export default connect(mapStateToProps)(ArticleFormContainer)