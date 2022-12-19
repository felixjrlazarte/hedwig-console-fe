import axios from 'axios';

const UNAUTHORIZED = 401;

export function axiosInterceptor() {
  axios.interceptors.request.use(
    config => {
      config.headers['Accept'] = 'application/json';
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = `Bearer ${sessionStorage.getItem(`hedwigToken`)}`;
      config.baseURL = "http://localhost:3001/";
      return config;
    },
    error => {
      Promise.reject(error)
    });

  axios.interceptors.response.use(
    response => response,
    error => {
      const { status } = error.response;
      if (status === UNAUTHORIZED) {
        sessionStorage.removeItem(`hedwigToken`);
      }
      return Promise.reject(error);
    }
  );
}