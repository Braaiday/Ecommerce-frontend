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

export const actionGetAllProducts = (products) => ({
  type: actionTypes.GET_ALL_PRODUCTS,
  payload: products,
})

export const actionAddItemToCart = (product) => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  payload: product,
});

export const actionRemoveItemFromCart = (product) => ({
  type: actionTypes.REMOVE_ITEM_FROM_CART,
  payload: product,
});

export const actionUpdateQuantity = (productId, quantity) => ({
  type: actionTypes.UPDATE_QUANTITY,
  payload: { productId, quantity },
});

export const actionClearCart = () => ({
  type: actionTypes.CLEAR_CART,
});