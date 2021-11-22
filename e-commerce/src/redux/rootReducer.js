import { combineReducers } from "redux";
import cartReducer from './cart/cardReducer';

const rootReducer = combineReducers({
    cart: cartReducer
});

export default rootReducer;