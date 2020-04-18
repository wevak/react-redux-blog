import { ARTICLE_CREATE, ARTICLE_DELETE, ARTICLE_UPDATE, ARTICLE_READ } from '../actions/articleActions'
import { v4 as uuidv4 } from 'uuid'

export const articleCreate = article => ({
  type: ARTICLE_CREATE,
  id: uuidv4(),
  payload: article
})

export const articleRead = id => ({
  type: ARTICLE_READ,
  payload: {id}
})

export const articleUpdate = article => ({
  type: ARTICLE_UPDATE,
  payload: article
})

export const articleDelete = id => ({
  type: ARTICLE_DELETE,
  payload: {id}
})
