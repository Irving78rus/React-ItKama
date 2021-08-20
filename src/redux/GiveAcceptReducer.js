const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_PROFILE1 = "SET_USER_PROFILE1";
let initialState = {
  ProductItem: [
    {
      foto: "https://avatars.mds.yandex.net/get-zen_doc/1578824/pub_5ddd072f3efb4d2736dc4c99_5ddd07363676ed2b9e752095/scale_1200",
      price: "1200",
      phone: "+79817220312",
    },
    {
      foto: "https://avatars.mds.yandex.net/get-zen_doc/1578824/pub_5ddd072f3efb4d2736dc4c99_5ddd07363676ed2b9e752095/scale_1200",
      price: "2100",
      phone: "+79817220312",
    },
    {
      foto: "https://avatars.mds.yandex.net/get-zen_doc/1578824/pub_5ddd072f3efb4d2736dc4c99_5ddd07363676ed2b9e752095/scale_1200",
      price: "2100",
      phone: "+79817220312",
    },
  ],
  profile: null,
};

const GiveAcceptReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile};
      
    }
    case SET_USER_PROFILE1: {
      return {...state, profile: action.profile};
      
    }

    default:
      return state;
  }
};
debugger
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
debugger
console.log(initialState.profile);
export default GiveAcceptReducer;
