import React from 'react'
import $ from 'jquery'
import ArticleFormContainer from './ArticleFormContainer'
import { connect } from 'react-redux'
import { userLogout, articleReset } from '../redux';
import { NavLink } from 'react-router-dom'

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.handleFormShow = this.handleFormShow.bind(this);
  }
  handleFormShow(){
    $('#articleForm').modal('show')
  }
  render(){
    const { logInUser, categories } = this.props
    return (
      <div>
        <div className="d-flex flex-column position-fixed bg-dark" style={{ height: "100%", width: 190 }}>
          <ul className="nav d-flex justify-content-around mt-3 text-white">
            <li className="nav-item">
              <button className="border-0 nav-link text-white bg-dark" onClick={() => {
                this.handleFormShow();
                this.props.dispatch(articleReset());
              }}>
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
                <button className="dropdown-item" onClick={() => this.props.dispatch(userLogout(logInUser))}>Logout</button>
              </div>
            </li>
          </ul>
          <ul className="nav flex-column my-3 text-white">
            <li className="nav-item">
              <NavLink to="/" exact
                activeClassName="active"
                className="btn btn-block btn-dark text-left"
              >
                <i className="las mr-2 la-book mr-2"></i>
                All Articles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" exact
                activeClassName="active"
                className="btn btn-block btn-dark text-left"
              >
                <i className="las mr-2 la-user"></i>
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favourites" exact
                activeClassName="active"
                className="btn btn-block btn-dark text-left" 
                onClick={() => this.props.dispatch(articleReset())}
              >
                <i className="las mr-2 la-star"></i>
                Favourites
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/trash" exact
                activeClassName="active"
                className="btn btn-block btn-dark text-left"
                onClick={() => this.props.dispatch(articleReset())}
              >
                <i className="las mr-2 la-trash-alt"></i>
                Trash
              </NavLink>
            </li>
          </ul>
          <div className="mb-2">
            <div className="text-secondary ml-3 mb-1">Categories</div>
            <ul className="nav flex-column">
              {categories.map((category, indx) => {
                return (
                  <li key={indx} className="nav-item">
                    <button className="btn btn-block btn-dark text-left">
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
  categories: [...new Set(state.article.articles.map(article => {
    return article.category
  }))],
  logInUser: state.session.currentlyLoggedIn.id
})

export default connect(mapStateToProps)(Sidebar);