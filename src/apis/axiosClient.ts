import axios from "axios";

const apiUrl = `https://dev.labanso.com/api/`;

const axiosClient = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    'content-type': 'application/json',
  }
})

axiosClient.interceptors.request.use(async (config) => {
  const customHeaders = {
    Authorization: '',
  };

  const token = localStorage.getItem('token');
  console.log('Token', token)
  if (token) {
    customHeaders.Authorization = `Bearer ${token}`;
  }

  return {
    ...config,
    headers: {
      ...customHeaders, // auto attach token
      ...config.headers, // but you can override for some requests
    },
  };
});

export default axiosClient;