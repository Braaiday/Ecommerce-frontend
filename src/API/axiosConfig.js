import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

instance.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem('token')}`;

export default instance;