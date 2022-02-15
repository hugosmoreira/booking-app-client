
const authReducer = (state = { name: '', role: 'Seller'}, action) => {
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