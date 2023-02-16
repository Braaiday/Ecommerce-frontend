
import { actionSetUser, actionToggleBackdrop } from '../actions/actions';
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

