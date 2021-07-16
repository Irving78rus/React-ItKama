import AllOrdersReducer from "./AllOrdersReducer";
import ProductReducer from "./ProductReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    Orders: AllOrdersReducer,
    Product: ProductReducer,
})


let store = createStore(reducers) ;
window.store = store;
 
export default store