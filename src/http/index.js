import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.alquran.cloud',
  headers: { Accept: 'application/json' },
});

export default axiosInstance;
