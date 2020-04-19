import React from 'react'
import ArticleForm from '../components/ArticleForm'
import { articleCreate, articleUpdate } from '../redux'
import { connect } from 'react-redux'
import $ from 'jquery'
import { reset } from 'redux-form'

class ArticleFormContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleArticleForm = this.handleArticleForm.bind(this);
  }
  handleArticleForm(values){
    if(this.props.editing.id === 'new'){
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
    $('#articleForm').modal('hide');
    this.props.dispatch(reset("articleForm"))
  }
  render(){
    return (
      <ArticleForm
        onSubmitArticle = {this.handleArticleForm}
      />
    )
  }
}

const mapStateToProps = state => ({
  user: state.session.currentlyLoggedIn,
  editing: state.articles.editing
})

export default connect(mapStateToProps)(ArticleFormContainer)