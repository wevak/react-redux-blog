import { ARTICLE_CREATE, ARTICLE_DELETE, ARTICLE_UPDATE, ARTICLE_TRASH_READ,
   ARTICLE_READ, ARTICLE_RESET, ARTICLE_FAVOURITE } from '../actions/articleActions'
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

export const articleTrashRead = id => ({
  type: ARTICLE_TRASH_READ,
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

export const articleReset = () => ({
  type: ARTICLE_RESET
})

export const articleFavourite = articleId => ({
  type: ARTICLE_FAVOURITE,
  payload: {
    articleId
  }
})