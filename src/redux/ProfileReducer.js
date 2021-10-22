import { ProfileApi } from "../api/api";
import { getUsersThunkCreator } from "./GiveAcceptReducer";

const SET_STATUS = "SET_STATUS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SAVE_PHOTO_SUCCESS ="SAVE_PHOTO_SUCCESS"
 
let initialState = {
    status: "profile",
    profile: null,
    isFetching: true,
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        case SET_STATUS: {
            return { ...state, status: action.status };
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile:{...state.profile, photos:action.photos} };
        }
        
       
        default:
            return state;
    }
};
 
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,photos
     
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const setStatus = (status) => {
    return { type: SET_STATUS, status };
};

export const getStatusThunkCreator = (userId) => async (dispatch) => {

    let response = await ProfileApi.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    let response = await ProfileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
     }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await ProfileApi.savePhoto(file)
    if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
     }
};
 
export const saveProfile = (profile) => async (dispatch, getState) => {
    debugger
  const userId = getState().auth.id
  
    let response = await ProfileApi.saveProfile(profile)
 
    if (response.data.resultCode === 0) {
   dispatch(getUsersThunkCreator(userId));
     }
      
};
export default ProfileReducer
