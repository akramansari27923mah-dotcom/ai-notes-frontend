import axios from 'axios';
import { config } from './validater';

const api = axios.create({
    baseURL: config.apiUrl,
    withCredentials: true
})

export default api