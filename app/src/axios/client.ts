import axios from 'axios';
const AxiosClient = axios.create({
    baseURL: import.meta.env.API_URL || "https://dummyjson.com"
})
export default AxiosClient