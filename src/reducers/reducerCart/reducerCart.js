import { cloneDeep } from 'lodash';
import * as actions from '../shared/actiontypes/actiontypes';

let initialState = {
    products: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.ADD_ITEM_TO_CART:
            state = cloneDeep(state);
            let findProduct = state.products.find(product => product._id === action.payload._id);
            if (findProduct) {
                findProduct.quantity = findProduct.quantity + 1;
            } else {
                action.payload.quantity = 1;
                state.products.push(action.payload);
            }
            return state
        default:
            return state
    }
}

