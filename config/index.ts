import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie'

interface CallAPIProps extends AxiosRequestConfig{
    token?: boolean;
}

export default async function callAPI({url, method, data, token}: CallAPIProps){
    
    let headers = {}
    if(token){
        const tokenCookie = Cookies.get('token')
        if(tokenCookie){
            const jwt_token = atob(tokenCookie)
            headers = {
                Authorization: `Bearer ${jwt_token}`
            }
        }
    }
    const res = await axios({
        url,
        method,
        data,
        headers
    }).catch(error => error.response)
    if(res.status > 300){
        const response = {
            error: true,
            message: res.data.error,
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