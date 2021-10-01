import { followApi, getUsers, unFollowApi } from "../api/api";
import { updateObkectInArray } from "../utils/obj-help";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGERSS = "TOGGLE_IS_FOLLOWING_PROGERSS";

let initialState = {
  users: [],
  pageSize: 25,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
          users: updateObkectInArray(state.users, action.userId, "id", { followed: true })
        // users:  [...state.users], тожесамое что строчка ниже
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true };
        //   }
        //   return u;
        // }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObkectInArray(state.users, action.userId, "id", { followed: false })
        // users:  [...state.users], тожесамое что строчка ниже
        // users: state.users.map(u =>u)
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGERSS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const followSucsess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSucsess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGERSS,
  isFetching,
  userId,
});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));


};


export const followUnfollowFlow = async (id, dispatch, apiMethod, actionCreater) => {
  dispatch(toggleIsFollowingProgress(true, id));
  let response = apiMethod
  if (response.data.resultCode === 0) {
    dispatch(actionCreater);
  }
  dispatch(toggleIsFollowingProgress(false, id));
}

export const Follow = (id) => async (dispatch) => {
  let apiMethod = await followApi(id)
  let actionCreater = followSucsess(id)
  followUnfollowFlow(id, dispatch, apiMethod, actionCreater)
};

export const unFollow = (id) => async (dispatch) => {
  let apiMethod = await unFollowApi(id)
  let actionCreater = unfollowSucsess(id)
  followUnfollowFlow(id, dispatch, apiMethod, actionCreater)
};

export default usersReducer;
