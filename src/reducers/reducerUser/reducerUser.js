import { cloneDeep } from 'lodash';
import * as actions from '../shared/actiontypes/actiontypes';

let initialState = {
    user: {
        role: localStorage.getItem('role') ?? null,
        token: localStorage.getItem('token') ?? null
    },
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SET_USER:
            state = cloneDeep(state);
            state.user = action.payload.data
            return state
        case actions.LOGOUT:
            state = cloneDeep(state);
            state.user = null;
            localStorage.setItem('role','');
            localStorage.setItem('token','');
            return state
        default:
            return state
    }
}

