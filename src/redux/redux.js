import {createStore} from 'redux';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
const SEARCH_ROOMS = 'SEARCH_ROOMS';

export const searchRooms = () => ({
  type: SEARCH_ROOMS,
})

export const attemptLogin = () => ({
  type: ATTEMPT_LOGIN,
})

export const login = (username) => ({
  type: LOGIN,
  payload: { username, loggedIn: true }
})

export const logout = () => ({
  type: LOGOUT,
  payload: { username: '', loggedIn: false }
})

let initState = {
  loggingIn: false,
  loggedIn: true,
  username: 'Phil',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    
    case ATTEMPT_LOGIN:
      return Object.assign({}, state, { loggingIn: true })

    case LOGIN:
      return Object.assign({}, state, { loggedIn: action.payload.loggedIn, loggingIn: false, username: action.payload.username })

    case LOGOUT:
      return Object.assign({}, state, { loggedIn: action.payload.loggedIn, loggingIn: false })

    default:
      return state;
  }
}

export const store = createStore(reducer);