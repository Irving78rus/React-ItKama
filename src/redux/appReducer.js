import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCSES = "INITIALIZED_SUCCSES";
let initialState = {
    initialized: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCSES: {
            return {
                ...state,
                initialized: true,
            };
        }
        default:
            return state;
    }
};

export const initializesSuccess = () => ({ type: INITIALIZED_SUCCSES });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializesSuccess());
    });
};

export default authReducer;
