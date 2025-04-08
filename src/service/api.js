import axios from 'axios';
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.defaults.timeout = 10000;

// Interceptor to check for unauthorized responses
api.interceptors.response.use(
    response => response,
    error => {
      const { response } = error;
      if (response && response.status === 401) {
        // Token has expired or is invalid.
        localStorage.removeItem('token');
        window.location = '/login';
      }
      return Promise.reject(error);
    }
  );

export default api;