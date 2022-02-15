import axios from "axios";

const apiUrl = `${window.location.protocol}//${window.location.hostname}:5000`;

const axiosClient = axios.create({
  baseURL: `${apiUrl}/api/v1`,
  headers: {
    'content-type': 'application/json',
  }
})

axiosClient.interceptors.request.use(async (config) => {
  const customHeaders = {
    Authorization: '',
  };

  const token = localStorage.getItem('token');
  if (token) {
    customHeaders.Authorization = `Beaer ${token}`;
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