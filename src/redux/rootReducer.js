import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import sessionReducer from './reducers/sessionReducer'
import articleReducer from './reducers/articleReducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  articles: articleReducer,
  form: formReducer
})

export default rootReducer