import { getUsersProfileApi, ProfileApi } from "../api/api";

const SET_STATUS = "SET_STATUS";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let initialState = {
  ProductItem: [
    {
      foto: "https://avatars.mds.yandex.net/get-zen_doc/1578824/pub_5ddd072f3efb4d2736dc4c99_5ddd07363676ed2b9e752095/scale_1200",
      price: "1200",
      phone: "+79817220312",
      id: 134,
    },

  ],
  status: "accept",
  profile: null,
  isFetching: true,
};

const GiveAcceptReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile: profile };
};
export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const getUsersThunkCreator = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await getUsersProfileApi(userId)
  dispatch(toggleIsFetching(false));
  dispatch(setUserProfile(response));
}

export const getStatusThunkCreator = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await ProfileApi.getStatus(userId)
  dispatch(toggleIsFetching(false));
  dispatch(setStatus(response.data));
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await ProfileApi.updateStatus(status)
  dispatch(toggleIsFetching(false));
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};


export default GiveAcceptReducer;
