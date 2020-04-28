import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(logger)));

store.subscribe(throttle(() => {
  saveState(store.getState())
}), 1000);

export default store