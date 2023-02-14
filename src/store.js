import reducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const store = (process.env.NODE_ENV === 'production')
    ?
    createStore(reducers,
        applyMiddleware(thunk),
        // other store enhancers if any
    )
    :
    createStore(reducers, composeWithDevTools(
        applyMiddleware(thunk),
        // other store enhancers if any
    ))
    ;

export default store;