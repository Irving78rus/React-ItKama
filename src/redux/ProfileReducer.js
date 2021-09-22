import { ProfileApi } from "../api/api";

const SET_STATUS = "SET_STATUS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
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
        default:
            return state;
    }
};
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const setStatus = (status) => {
    return { type: SET_STATUS, status };
};

export const getStatusThunkCreator = (userId) => async (dispatch) => {
        
      let response= await ProfileApi.getStatus(userId) 
      dispatch(setStatus(response.data));
         
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    let response = await ProfileApi.updateStatus(status)
    // if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    // }
};

export default ProfileReducer
