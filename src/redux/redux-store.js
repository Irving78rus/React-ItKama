import AllOrdersReducer from "./AllOrdersReducer";
import usersReducer from "./UsersReducer";
 
import ProductReducer from "./ProductReducer";
import GiveAcceptReducer from "./GiveAcceptReducer";
import authReducer from './auth-reducer';

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    Orders: AllOrdersReducer,
    Product: ProductReducer,
    usersPage: usersReducer,
    GiveAcceptReducer: GiveAcceptReducer,
    auth: authReducer,
})

 
let store = createStore(reducers) ;

 
  
export default store