import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://adoptame-70420.onrender.com/',
  withCredentials: true,
});

export default axiosInstance;
