import axios from 'axios';

const BASE_URL = "http://localhost:3000/api" // Local

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export default axiosInstance;
