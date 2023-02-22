import * as actionTypes from '../actiontypes/actiontypes';

export const actionSetUser = data => ({
    type: actionTypes.SET_USER,
    payload: data,
})

export const actionToggleBackdrop = () => ({
    type: actionTypes.TOGGLE_BACKDROP,
})

export const actionLogOut = () => ({
    type: actionTypes.LOGOUT,
})

export const actionmGetAllProducts = (products) => ({
    type: actionTypes.GET_ALL_PRODUCTS,
    payload: products,
})

export const actionAddItemToCart = (product) => ({
    type: actionTypes.ADD_ITEM_TO_CART,
    payload: product,
})