const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_PROFILE1 = "SET_USER_PROFILE1";
let initialState = {
  profile: null,
  qwe: null,
};

const GiveAcceptReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_USER_PROFILE1: {
      return alert(action.qwe);
    }

    default:
      return state;
  }
};

export const setUserProfileAC = (profile) => {
  return { type: SET_USER_PROFILE, profile: profile } 
};
export const setUserProfileAC1 = (profile) => {
  return { type: SET_USER_PROFILE, profile: profile } 
};
export const testqwe = (qwe) => {
  return { type: SET_USER_PROFILE1, qwe: qwe } 
};

export default GiveAcceptReducer;
