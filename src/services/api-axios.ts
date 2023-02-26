import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3333/"
    
})

api.interceptors.request.use(
    async (config) => {
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      return config;
    }, (error) => {
      console.log(error);
      Promise.reject(error);
    }
);

export { api };
