import axios, { AxiosRequestConfig } from 'axios';

export default async function callAPI({url, method, data}: AxiosRequestConfig){
    const res = await axios({
        url,
        method,
        data
    }).catch(error => error.response)
    if(res.status > 300){
        const response = {
            error: true,
            message: res.data.message,
            data: ''
        }
        return response
    }

    const response = {
        error: false,
        message: 'success',
        data: res.data.data
    }
    return response
}