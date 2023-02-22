import { combineReducers } from "redux";
import reducerUser from './reducerUser/reducerUser';
import reducerBackdrop from './reducerBackdrop/reducerBackdrop';
import reducerProducts from './reducerProducts/reducerProducts';

let reducers = combineReducers({
    reducerUser,
    reducerBackdrop,
    reducerProducts
})

export default reducers;