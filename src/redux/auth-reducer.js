import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,

};

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USER_DATA: {

      return { ...state, ...action.payload  };
    }


    default:
      return state;
  }
};

export const setAuthUserData = (email, id, login, isAuth) => {
  return { type: SET_USER_DATA, payload: {email, id, login, isAuth} };
};
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setAuthThunkCreator = () => {
  return (dispatch) => {
    authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { email, id, login } = response.data.data;
        dispatch(setAuthUserData(email, id, login,true));

      }
    });
  };
};


export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {

        dispatch(setAuthThunkCreator());

      }
    });
  };
};

export const logout = ( ) => {
  return (dispatch) => {
    authAPI.logout( ).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null,false));

      }
    });
  };
};
export default authReducer;
