import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TitlesBar from '../../presentational/TitlesBar'

const mapStateToProps = (state, ownProps) => {
  const { article } = state
  return {
    articles: article.articles.filter(article => article.category.toLowerCase() === ownProps.match.params.categoryId),
    activeArticleTitleId: article.tempArticle.id || ''
  }
}

export default withRouter(connect(mapStateToProps)(TitlesBar))