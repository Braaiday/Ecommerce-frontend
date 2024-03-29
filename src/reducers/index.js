import { combineReducers } from "redux";
import reducerUser from './reducerUser/reducerUser';
import reducerBackdrop from './reducerBackdrop/reducerBackdrop';
import reducerProducts from './reducerProducts/reducerProducts';
import reducerCart from "./reducerCart/reducerCart";

let reducers = combineReducers({
    reducerUser,
    reducerBackdrop,
    reducerProducts,
    reducerCart
})

export default reducers;