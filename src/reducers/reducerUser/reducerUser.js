import { cloneDeep } from 'lodash';
import * as actions from '../shared/actiontypes/actiontypes';

let initialState = {
    user: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SET_USER:
            state = cloneDeep(state);
            state.user = action.payload.data
            return state

        default:
            return state
    }
}

