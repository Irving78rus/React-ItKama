import { LoginApi } from "../api/api";

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

export const setAuthUserData = (email, id,  login,isAuth) => {
  return { type: SET_USER_DATA, email, id,  login,isAuth };
};
 
export const setAuthThunkCreator = ( ) => {
   
  return (dispatch) => {
    LoginApi().then((data) => {
 
      if (data.resultCode === 0) {
        let { email, id, login } = data.data;
        dispatch(setAuthUserData(email, id, login));
       
      }
    });
  };
};
export default authReducer;
