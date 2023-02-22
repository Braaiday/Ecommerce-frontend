// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
    baseURL: process.env.REACT_APP_API_URL
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem('token')}`;

// Also add/ configure interceptors && all the other cool stuff

// TODO: Read into this

export default instance;