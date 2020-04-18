import React from 'react'
// import $ from 'jquery'
import ArticleFormContainer from './ArticleFormContainer'
import { connect } from 'react-redux'

const Sidebar = (props) => {
  return (
    <div>
      <div className="d-flex flex-column position-fixed bg-dark" style={{ height: "100%", width: 190 }}>
        <ul className="nav d-flex justify-content-around mt-3 text-white">
          <li className="nav-item">
            <button className="border-0 nav-link text-white bg-dark" data-toggle="modal" data-target="#articleForm"/*  onClick={()=>$('#articleForm').modal('show')} */>
              <i className="las la-plus"></i>
            </button>
          </li>
          <li className="nav-item">
            <button className="border-0 nav-link text-white bg-dark">
              <i className="las la-plus"></i>
            </button>
          </li>
          <li className="nav-item">
            <button className="border-0 nav-link text-white bg-dark">
              <i class="las la-ellipsis-v"></i>
            </button>
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
              <i class="las mr-2 la-trash-alt"></i>
              Trash
            </button>
          </li>
        </ul>
        <div className="mb-2">
          <div className="text-secondary ml-3 mb-1">Categories</div>
          <ul className="nav flex-column">
            {props.categories.map(category => {
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

const mapStateToProps = state => ({
  categories: [...new Set(state.articles.map(article => {
    return article.category
  }))]
})

export default connect(mapStateToProps)(Sidebar);