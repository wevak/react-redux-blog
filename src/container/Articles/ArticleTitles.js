import { connect } from 'react-redux'
import TitlesBar from '../../presentational/TitlesBar'

const mapStateToProps = state => {
  const { article, session } = state
  return {
    articles: article.articles.filter(article => article.author.id === session.currentlyLoggedIn.id),
    activeArticleTitleId: article.tempArticle.id
  }
}

export default connect(mapStateToProps)(TitlesBar)