import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,// by this browser will send the cookies to server on every req
})

export default axiosInstance;