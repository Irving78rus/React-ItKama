const SET_USER_DATA = "SET_USER_DATA";
 
let initialState = {
  id: null,
  email: null,
  login: null,
   
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
     
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, email: action.email,id: action.id,login: action.login, isAuth: true,  };
    }
   
     
    default:
      return state;
  }
};

export const setAuthUserData = (email, id,  login) => {
  return { type: SET_USER_DATA, email, id,  login };
};
 

export default authReducer;
