const initialState = {
  users: [
    {
      id: '108',
      firstName: 'demo',
      lastName: 'demo',
      username: 'demo',
      email: 'demo@email.org',
      password: 'demo',
    },
    {
      id: '100',
      firstName: 'vivek',
      lastName: 'mahajan',
      username: 'wevak',
      email: 'wevak@email.com',
      password: 'wevak',
    }
  ],
  currentlyRegistered: {
    id: '',
    username: '',
    firstName: ''
  },
  isLogged: false,
  currentlyLoggedIn: {
    id: '',
    firstName: '',
    error: '',
  }
}
const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP': {
      return {
        ...state,
        users: [
          ...state.users,
          { id: action.id, ...action.payload }    //New user details 
        ],
        currentlyRegistered: {    //Currently registered user log
          id: action.id,
          username: action.payload.username,
          firstName: action.payload.firstName
        },
        currentlyLoggedIn: {    //Currently registered user is logged in
          id: action.id,
          firstName: action.payload.firstName
        },
        isLogged: true
      }
    }
    case 'LOGIN': {
      const authUser = action.payload.username;
      const authPassword = action.payload.password;
      for (let user of state.users) {
        if (user.username === authUser && user.password === authPassword) { //Is user authentic ?
          return {
            ...state,
            currentlyLoggedIn: {    // if user authentic log in
              id: user.id,
              firstName: user.firstName,
              error: ''
            },
            isLogged: true
          }
        }
      }
      return {
        ...state,
        currentlyLoggedIn: {
          ...state.currentlyLoggedIn,
          error: 'Invalid username/ password'   // user is not authentic
        }
      }
    }
    case 'LOGOUT':
      return {
        /* ...state,
        currentlyRegistered: {
          id: '',
          username: '',
          firstName: ''
        },
        isLogged: false,
        currentlyLoggedIn: {
          id: '',
          firstName: '',
          error: '',
        } */
      };
    default:
      return state;
  }
}

export default sessionReducer;