import {
   ARTICLE_CREATE, ARTICLE_READ, ARTICLE_UPDATE, ARTICLE_FAVOURITE, ARTICLE_TRASH_RESTORE,
   ARTICLE_DELETE, ARTICLE_LOAD, ARTICLE_RESET, ARTICLE_TRASH_READ } from '../actions/articleActions'

const defaultState = {
  articles: [
    {
      id: 'abcd-efgh-ijkl',
      title: 'Markdown previewer is ready',
      description: 'Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.',
      category: 'Default',
      favourite: false,
      author: {
        id: '108',
        name: 'demo'
      }
    },
    {
      id: 'mnop-qrst-uvwx',
      title: 'Enter markdown input!',
      description: 'Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.',
      category: 'Edited',
      favourite: true,
      author: {
        id: '108',
        name: 'demo'
      }
    }
  ],
  trash: [],
  tempArticle: {
    id: '',
    title: '',
    description: '',
    category: '',
    favourite: false,
    author: {
      id: '',
      name: ''
    }
  }
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
            favourite: false,
            author: {
              id: action.payload.user.id,
              name: action.payload.user.firstName
            }
          }
        ]
      }

    case ARTICLE_READ:
      return {
        ...state,
        tempArticle: state.articles.find(article => {
          return article.id === action.payload.id
        })
      }

    case ARTICLE_TRASH_READ:
      const articleRead = state.trash.find(article => {
        return article.id === action.payload.id
      }) || defaultState.tempArticle
      
      return {
        ...state,
        tempArticle: articleRead
      }
    
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
        })
      }
      
    case ARTICLE_DELETE:
      return {
        ...state,
        articles: state.articles.filter(article => {
        // article.id === action.payload.id && console.log(`${article.id} ${action.payload.id}`)
          return article.id !== action.payload.id
        }),
        trash: [
          ...state.trash,
          state.articles.find(article => article.id === action.payload.id)
        ]
      }

    case ARTICLE_FAVOURITE:
      return {
        ...state,
        articles: state.articles.map(article => {
          return article.id !== action.payload.articleId
            ? article
            : {
              ...article,
              favourite: !article.favourite
            }
        })
      }

    case ARTICLE_LOAD:
      return {
        ...state,
        tempArticle: state.articles.find(article => {
          return article.id === action.payload.articleId
        })
      }
      
    case ARTICLE_RESET:
      return {
        ...state,
        tempArticle: {
          id: '',
          title: '',
          description: '',
          category: '',
          author: {
            id: '',
            name: ''
          }
        }
      }
    
    case ARTICLE_TRASH_RESTORE: {
      console.log(action)
      return {
        ...state,
        articles: [
          ...state.articles,
          state.trash.find(article => article.id === action.payload.id)
        ],
        trash: state.trash.filter(article => article.id !== action.payload.id)
      }
    }

    default: return state
  }
}

export default articleReducer