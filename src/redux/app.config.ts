import axios from "axios";

const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf';

const instance = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
})

instance.defaults.headers.common['Authorization'] = API_KEY;

export default instance;
