import {SIGN_UP, LOGIN, LOGOUT} from '../actions/SessionActions';
import { v4 as uuidv4 } from 'uuid';

export const userRegistration = (userData) => {
  return {
    type: SIGN_UP,
    id: uuidv4(),
    payload: userData
  }
}
export const userLogin = (user) => {
  return {
    type: LOGIN,
    payload: user
  }
}

export const userLogout = (uid) => {
  return {
    type: LOGOUT,
    payload: uid
  }
}