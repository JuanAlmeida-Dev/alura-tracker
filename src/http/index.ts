import axios, { AxiosInstance } from 'axios';

const clinetHttp: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    });

export default clinetHttp;