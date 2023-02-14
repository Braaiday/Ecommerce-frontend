import * as actionTypes from '../actiontypes/actiontypes';

export const actionSetUser = data => ({
    type: actionTypes.SET_USER,
    payload: data,
})

export const actionToggleBackdrop= () => ({
    type: actionTypes.TOGGLE_BACKDROP,
})