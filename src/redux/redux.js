import {createStore} from 'redux';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
const SEARCH_HOMES = 'SEARCH_HOMES';
const SHOW_ROOM = 'SHOW_ROOM';

export const showRoom = (id) => ({
  type: SHOW_ROOM,
  payload: { id }
})

export const searchRooms = (term) => ({
  type: SEARCH_HOMES,
  payload: { searchword: term }
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
  searchword: '',
  searchTerms: [],
  roomSearchId: null,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    
    case SHOW_ROOM:
      return Object.assign({}, state, { roomSearchId: action.payload.id })

    case SEARCH_HOMES:
      return Object.assign({}, state, { searchword: action.payload.searchword, searchTerms: state.searchTerms.concat(action.payload.searchword) })
    
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