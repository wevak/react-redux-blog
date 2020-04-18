import { ARTICLE_CREATE, ARTICLE_READ, ARTICLE_UPDATE, ARTICLE_DELETE} from '../actions/articleActions'
const articles = [
  {
    id: 'abcd-efgh-ijkl',
    title: 'Developer blogs to follow',
    description : 'Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.',
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
]

const articleReducer = (state = articles, action) => {
  switch(action.type){
    case ARTICLE_CREATE:
      return [
        ...state,
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
      ]
    case ARTICLE_READ: {
      return state
    }
    case ARTICLE_DELETE:
      return state.filter(article => {
        // article.id === action.payload.id && console.log(`${article.id} ${action.payload.id}`)
        return article.id !== action.payload.id
      });
    case ARTICLE_UPDATE: 
      // console.log("UPDATE " + action.payload);   //return all articles including updated article
      return state.filter(article => {
        return article.id !== action.payload.id 
          ? article 
          : {
            ...article,
            title: action.payload.article.title,
            description: action.payload.article.description,
            category: article.payload.article.category
          }
      })
    default: return state
  }
}

export default articleReducer