// import { ProfileApi } from "../api/api";

// const SET_STATUS = "SET_STATUS";
// const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
// let initialState = {
//   status: "profile",
//   profile: null,
//   isFetching: true,
// };

// const ProfileReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_IS_FETCHING: {
//       return { ...state, isFetching: action.isFetching };
//     }
//     case SET_STATUS: {
//       return { ...state, status: action.status };
//     }
//     default:
//       return state;
//   }
// };
// export const toggleIsFetching = (isFetching) => ({
//   type: TOGGLE_IS_FETCHING,
//   isFetching,
// });
// export const setStatus = (status) => {
//   return { type: SET_STATUS, status };
// };

// export const getStatusThunkCreator = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleIsFetching(true));
//     ProfileApi.getStatus(userId).then((response) => {
//         dispatch(toggleIsFetching(false));
//       dispatch(setStatus(response));
//     });
//   };
// };
// export const updateStatusThunkCreator = (status) => {
//   return (dispatch) => {
//     dispatch(toggleIsFetching(true));
//     ProfileApi.updateStatus(status).then((response) => {
//         dispatch(toggleIsFetching(false));
//       if (response.data.resultCode === 0) {
//         dispatch(setStatus(response));
//       }
//     });
//   };
// };

// export default ProfileReducer;
