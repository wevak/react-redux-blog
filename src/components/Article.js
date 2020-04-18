import React from 'react'

const Article = props => {
  const showActiveOnLoad = props.indx !== 0 ? '' : 'show active'  //First article description is shown as active by default
  return (
    <div className={`tab-pane fade text-justify ${showActiveOnLoad}`} id={`list-${props.article.id}`} role="tabpanel" aria-labelledby="list-settings-list">
      {props.article.description}
    </div>
  )
}

export default Article