import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEST_API_URL,
})

export default instance;