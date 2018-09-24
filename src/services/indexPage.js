import axios from '../utils/axios';

export const getList = () => {
    return axios.get('https://api.myjson.com/bins/jdkak');
};