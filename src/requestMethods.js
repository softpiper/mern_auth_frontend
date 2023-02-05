import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API;


export const publicRequest = axios.create({
    baseURL : BASE_URL,
})