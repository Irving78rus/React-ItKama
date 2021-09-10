import AllOrdersReducer from "./AllOrdersReducer";
import usersReducer from "./UsersReducer";
 
import ProductReducer from "./ProductReducer";
import GiveAcceptReducer from "./GiveAcceptReducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import ProfileReducer from "./ProfileReducer";
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    Orders: AllOrdersReducer,
    Product: ProductReducer,
    usersPage: usersReducer,
    GiveAcceptReducer: GiveAcceptReducer,
    auth: authReducer,
    ProfileReducer: ProfileReducer,
})

 
let store = createStore(reducers,  applyMiddleware(thunkMiddleware)) ;

 
  
export default store