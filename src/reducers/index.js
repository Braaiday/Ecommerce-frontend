import { combineReducers } from "redux";
import reducerUser from './reducerUser/reducerUser';
import reducerBackdrop from './reducerBackdrop/reducerBackdrop';

let reducers = combineReducers({
    reducerUser,
    reducerBackdrop,
})

export default reducers;