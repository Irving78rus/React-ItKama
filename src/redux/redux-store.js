import AllOrdersReducer from "./AllOrdersReducer";
import usersReducer from "./UsersReducer";
import ProductReducer from "./ProductReducer";
import GiveAcceptReducer from "./GiveAcceptReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import ProfileReducer from "./ProfileReducer";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";
import { compose,createStore, combineReducers, applyMiddleware  } from "redux";


 
let reducers = combineReducers({
  Orders: AllOrdersReducer,
  Product: ProductReducer,
  usersPage: usersReducer,
  GiveAcceptReducer: GiveAcceptReducer,
  auth: authReducer,
  ProfileReducer: ProfileReducer,
  form: formReducer,
  app:appReducer,
});
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, /* preloadedState, */ composeEnhancers( applyMiddleware(thunkMiddleware)));
 

export default store;
