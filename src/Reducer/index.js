import {combineReducers} from "redux";
import products from "./Products";
import cart from "./Cart";
import message from "./Message";
const rootReducer = combineReducers(
    {
        products,
        cart,
        message
    }
)
export default rootReducer;