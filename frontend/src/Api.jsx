import axios from 'axios';

export const API = axios.create({
    baseURL:['http://localhost:5000','https://task-manager-3-22fc.onrender.com'][1],//
});