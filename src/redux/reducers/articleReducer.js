import { ARTICLE_CREATE, ARTICLE_READ, ARTICLE_UPDATE, ARTICLE_DELETE, ARTICLE_LOAD, ARTICLE_EDIT } from '../actions/articleActions'
const defaultState = {
  articles: [
    {
      id: 'abcd-efgh-ijkl',
      title: 'Developer blogs to follow',
      description: 'Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.',
      category: 'Default',
      author: {
        id: '108',
        name: 'demo'
      }
    },
    {
      id: 'mnop-qrst-uvwx',
      title: 'Welcome to takearticle!',
      description: 'Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.',
      category: 'Edited',
      author: {
        id: '108',
        name: 'demo'
      }
    }
  ],
  article: {},
  editing: { id: false }
}

const articleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ARTICLE_CREATE:
      return {
        ...state,
        articles: [
          ...state.articles,
          {
            id: action.id,
            title: action.payload.article.title,
            category: action.payload.article.category
              .trim()
              .toLowerCase()
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "),           //Sanitize input
            description: action.payload.article.description,
            author: {
              id: action.payload.user.id,
              name: action.payload.user.firstName
            }
          }
        ],
        editing: { id: false }
      }
    case ARTICLE_READ: {
      return state
    }
    case ARTICLE_DELETE:
      return state.articles.filter(article => {
        // article.id === action.payload.id && console.log(`${article.id} ${action.payload.id}`)
        return article.id !== action.payload.id
      });
    case ARTICLE_UPDATE:         //return all articles interpolating updated article
      return {
        ...state,
        articles: state.articles.map(article => {
          return article.id !== action.payload.article.id
            ? article
            : {
              ...article,
              title: action.payload.article.title,
              description: action.payload.article.description,
              category: action.payload.article.category
            }
        }),
        editing: { id: false }
      }
    case ARTICLE_LOAD:
      return {
        ...state,
        article: state.articles.find(article => {
          // if (article.id === action.payload.articleId)
            // return article
          return article.id === action.payload.articleId
        })
      }
    case ARTICLE_EDIT:
      return {
        ...state,
        editing: { id: action.payload.id }
      }
    default: return state
  }
}

export default articleReducer