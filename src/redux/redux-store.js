import AllOrdersReducer from "./AllOrdersReducer";
import usersReducer from "./UsersReducer";
 
import ProductReducer from "./ProductReducer";
import GiveAcceptReducer from "./GiveAcceptReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    Orders: AllOrdersReducer,
    Product: ProductReducer,
    usersPage: usersReducer,
    GiveAccept: GiveAcceptReducer,
})


let store = createStore(reducers) ;
 
window.store = store;
 
export default store