import { followApi, getUsers, unFollowApi } from "../api/api";

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
        // users:  [...state.users], тожесамое что строчка ниже
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        // users:  [...state.users], тожесамое что строчка ниже
        // users: state.users.map(u =>u)
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
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
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
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

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const followThunkCreator = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, id));

    followApi(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
      }

    dispatch(toggleIsFollowingProgress(false, id));
    });
  };
};
export const unFollowThunkCreator = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, id));

    unFollowApi(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(id));
      }

    dispatch(toggleIsFollowingProgress(false, id));
    });
  };
};

export default usersReducer;
