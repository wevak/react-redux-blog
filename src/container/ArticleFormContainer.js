import React from 'react'
import ArticleForm from '../components/ArticleForm'
import { articleCreate } from '../redux'
import { connect } from 'react-redux'
import $ from 'jquery'

class ArticleFormContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleArticleForm = this.handleArticleForm.bind(this);
  }
  handleArticleForm(values){
    this.props.dispatch(articleCreate({
      article: values,
      user: this.props.user
    }))
    $('#articleForm').modal('hide');
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
  user: state.session.currentlyLoggedIn
})

export default connect(mapStateToProps)(ArticleFormContainer)