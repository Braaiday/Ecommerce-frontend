
import { actionGetAllProducts, actionSetUser } from '../actions/actions';
import axios from '../../../API/axiosConfig';

export const login = (data) => {
  return (dispatch) => {
    return axios.post('/user/login', data)
      .then(
        user => dispatch(actionSetUser(user)),
        err => dispatch(actionSetUser(err))
      );
  };
};

export const register = (data) => {
  return (dispatch) => {
    return axios.post('/user/signup', data)
      .then(
        user => dispatch(actionSetUser(user)),
        err => dispatch(actionSetUser(err))
      );
  };
};

export const addproduct = (data) => {
  return (dispatch) => {
    return axios.post('/products', data)
      .then(
        product => console.log({ product }),
        err => Promise.reject(err)
      );
  };
};

export const addImage = (data) => {
  return (dispatch) => {
    return axios.post('/products/uploadimage', data)
      .then(
        image => Promise.resolve(image),
        err => Promise.reject(err)
      );
  };
};

export const getProducts = () => {
  return (dispatch) => {
    return axios.get('/products')
      .then(
        products => dispatch(actionGetAllProducts(products)),
        err => Promise.reject(err)
      );
  };
};

export const getProduct = (id) => {
  return (dispatch) => {
    return axios.get(`/products/${id}`)
      .then(
        product => Promise.resolve(product),
        err => Promise.reject(err)
      );
  };
};

