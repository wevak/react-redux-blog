import React from 'react'
const ReactMarkdown = require('react-markdown')

const Article = props => {
  const showActiveOnLoad = props.indx !== 0 ? '' : 'show active'  //First article description is shown as active by default
  return (
    <div key={props.article.id} className={`tab-pane fade text-justify ${showActiveOnLoad}`} id={`list-${props.article.id}`} role="tabpanel" aria-labelledby="list-settings-list">
      <ReactMarkdown source={props.article.description} />
    </div>
  )
}

export default Article