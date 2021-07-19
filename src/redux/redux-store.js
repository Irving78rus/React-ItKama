import AllOrdersReducer from "./AllOrdersReducer";
import usersReducer from "./UsersReducer";
 
import ProductReducer from "./ProductReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    Orders: AllOrdersReducer,
    Product: ProductReducer,
    usersPage: usersReducer,
})


let store = createStore(reducers) ;
 
 
export default store