import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

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

      return { ...state, ...action.payload };
    }


    default:
      return state;
  }
};

export const setAuthUserData = (email, id, login, isAuth) => {
  return { type: SET_USER_DATA, payload: { email, id, login, isAuth } };
};
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { email, id, login } = response.data.data;
        dispatch(setAuthUserData(email, id, login, true));

      }
    });
  };
};


export const login = (email, password, rememberMe) => (dispatch) => {

  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
    else {
     let message = response.data.messages.length>0 ? response.data.messages[0]: "some error"
      dispatch(stopSubmit('login', { _error: message }))
    }
  });

};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));

      }
    });
  };
};
export default authReducer;
