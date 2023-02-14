import { cloneDeep } from 'lodash';
import * as actions from '../shared/actiontypes/actiontypes';

let initialState = {
    isFetchingData: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.TOGGLE_BACKDROP:
            state = cloneDeep(state);
            state.isFetchingData = !state.isFetchingData;
            return state
        default:
            return state
    }
}

