

const initialState = {
   isLoggedin: localStorage.getItem('isLoggedin')
  //name:'preethi'
};
const reducer = (state = initialState, action) => {
   switch (action.type) {
      
      case 'SET_LOGIN':
        return {...state, isLoggedin: true}
        case 'SET_LOGOUT':
         return {...state,  isLoggedin: false} 
      default:
         return state;
   }
}
export default reducer;