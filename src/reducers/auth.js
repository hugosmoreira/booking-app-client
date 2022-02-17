
let userState;

if(window.localStorage.getItem('auth')) {
  userState = JSON.parse(window.localStorage.getItem('auth'))
}


const authReducer = (state = { }, action) => {
    switch(action.type) {
      case 'LOGGED_IN_USER':
        return {
          ...state,
          user: action.payload
        }
      case 'LOGOUT':
        return action.payload
          
        
      default:
        return state;
    }
}

export default authReducer;