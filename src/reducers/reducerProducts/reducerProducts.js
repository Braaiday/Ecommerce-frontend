import { cloneDeep } from 'lodash';
import * as actions from '../shared/actiontypes/actiontypes';

let initialState = {
    products: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.GET_ALL_PRODUCTS:
            state = cloneDeep(state);
            state.products = action.payload.data
            return state
        default:
            return state
    }
}

