import React from 'react'
import CategoryTitles from './CategoryTitlesContainer'
import CategoryContainer from './CategoryContainer'

function Category({ match }) {
  return (
    <div className="position-relative">
      <CategoryTitles match={match}/>
      <CategoryContainer />
    </div>
  )
}

export default Category