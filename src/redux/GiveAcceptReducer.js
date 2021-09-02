import { getUsersProfileApi } from "../api/api";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let initialState = {
  ProductItem: [
    {
      foto: "https://avatars.mds.yandex.net/get-zen_doc/1578824/pub_5ddd072f3efb4d2736dc4c99_5ddd07363676ed2b9e752095/scale_1200",
      price: "1200",
      phone: "+79817220312",
      id:1,
    },
    {
      foto: "https://avatars.mds.yandex.net/get-zen_doc/1578824/pub_5ddd072f3efb4d2736dc4c99_5ddd07363676ed2b9e752095/scale_1200",
      price: "2100",
      phone: "+79817220312",
      id:2,
    },
    {
      foto: "https://avatars.mds.yandex.net/get-zen_doc/1578824/pub_5ddd072f3efb4d2736dc4c99_5ddd07363676ed2b9e752095/scale_1200",
      price: "2100",
      phone: "+79817220312",
      id:3,
    },
  ],
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

export const getUsersThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    getUsersProfileApi(userId).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUserProfile(data));
    });
  };
};

export default GiveAcceptReducer;
