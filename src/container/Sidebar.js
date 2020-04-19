import React from 'react'
import $ from 'jquery'
import ArticleFormContainer from './ArticleFormContainer'
import { connect } from 'react-redux'
import { userLogout } from '../redux';


class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(id){
    this.props.dispatch({type: 'ARTICLE_EDIT', payload: {id}})
    $('#articleForm').modal('show')
  }
  render(){
    return (
      <div>
        <div className="d-flex flex-column position-fixed bg-dark" style={{ height: "100%", width: 190 }}>
          <ul className="nav d-flex justify-content-around mt-3 text-white">
            <li className="nav-item">
              <button className="border-0 nav-link text-white bg-dark" /* data-toggle="modal" */ /* data-target="#articleForm" */ onClick={() => this.handleEdit("new")}>
                <i className="las la-plus"></i>
              </button>
            </li>
            <li className="nav-item">
              <button className="border-0 nav-link text-white bg-dark">
                <i className="las la-sync"></i>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn text-white" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="las la-cog"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" onClick={() => this.props.dispatch(userLogout(this.props.logInUser))}>Logout</button>
              </div>
            </li>
          </ul>
          <ul className="nav flex-column my-3 text-white">
            <li className="nav-item">
              <button className="btn btn-block btn-dark text-left active" href="./">
                <i className="las mr-2 la-book mr-2"></i>
                All Articles
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-block btn-dark text-left" href="./">
                <i className="las mr-2 la-user"></i>
                Profile
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-block btn-dark text-left" href="./">
                <i className="las mr-2 la-star"></i>
                Favourites
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-block btn-dark text-left" href="./">
                <i className="las mr-2 la-trash-alt"></i>
                Trash
              </button>
            </li>
          </ul>
          <div className="mb-2">
            <div className="text-secondary ml-3 mb-1">Categories</div>
            <ul className="nav flex-column">
              {this.props.categories.map(category => {
                return (
                  <li className="nav-item">
                    <button className="btn btn-block btn-dark text-left" href="./">
                      <i className="las mr-2 la-folder"></i>
                      {category}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <button className="btn btn-block text-light text-left bg-dark d-none"><i className="las mr-2 la-plus"></i>Add Category</button>
          </div>
        </div>
        <ArticleFormContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: [...new Set(state.articles.articles.map(article => {
    return article.category
  }))],
  logInUser: state.session.currentlyLoggedIn.id
})

export default connect(mapStateToProps)(Sidebar);