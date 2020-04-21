import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

let ArticleForm = ({ onSubmitArticle, handleSubmit}) => {
  return (
    <div className="modal fade" id="articleForm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Article</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmitArticle)}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <Field
                  name="title"
                  component="input"
                  className="form-control"
                  type="text"
                  placeholder="Article Title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputCategory">Category</label>
                <Field
                  name="category"
                  component="input"
                  className="form-control"
                  type="text"
                  placeholder="Article Category"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Article</label>
                <Field
                  name="description"
                  component="textarea"
                  rows="6"
                  className="form-control"
                  type="textarea"
                  placeholder="Article description"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

ArticleForm = reduxForm({
  form: 'articleForm',
  enableReinitialize: true
})(ArticleForm)

ArticleForm = connect(state => {
  const { article } = state
  return {
    initialValues: {
      ...article.article,
    }
  }
})(ArticleForm)
export default ArticleForm;