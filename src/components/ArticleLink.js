import React from 'react'

function ArticleLink(props) {
  return (
    <a className={`d-flex list-group-item list-group-item-action ${props.active}`} key={props.article.id} id="list-settings-list" data-toggle="list" href={`#list-${props.article.id}`} role="tab" aria-controls="settings">
      <i className="lar la-star pt-1 mr-1"></i>
      <div>{props.article.title}</div>
      <div className="d-flex flex-column">
        <i className="las la-trash" onClick={() => props.onArticleDelete(props.article.id)}></i>
        <i className="las la-pen" data-toggle="modal" data-target="#articleForm" onClick={() => props.onArticleFormShow(props.article)}></i>
      </div>
    </a>
  )
}

export default ArticleLink