import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const configureAxiosInstance = (actionToggleBackdrop) => {
    instance.interceptors.request.use(config => {
        const token = window.localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        actionToggleBackdrop();
        return config;
    }, error => {
        actionToggleBackdrop();
        return Promise.reject(error);
    });

    instance.interceptors.response.use(response => {
        actionToggleBackdrop();
        return response;
    }, error => {
        actionToggleBackdrop();
        return Promise.reject(error);
    });

}
export default instance;