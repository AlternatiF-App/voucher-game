import axios from 'axios'
import callAPI from '../config'
import { CheckoutTypes } from './data-types'

const ROOT_API = 'https://voucher-game-server.herokuapp.com/'
const API_VERSION = 'api/v1'

export async function getFeaturedGames(){
    const res = await axios.get(`${ROOT_API}${API_VERSION}/players/landing-page`)
    const axiosRes = res.data
    return axiosRes.data
}

export async function getDetailVoucher(id:string){
    const res = await axios.get(`${ROOT_API}${API_VERSION}/players/detail/${id}`)
    const axiosRes = res.data
    return axiosRes.data
}

export async function getPayments(){
    const res = await axios.get(`${ROOT_API}${API_VERSION}/players/payment`)
    const axiosRes = res.data
    return axiosRes.data
}

export async function getGameCategory(){
    const res = await axios.get(`${ROOT_API}${API_VERSION}/players/category`)
    const axiosRes = res.data
    return axiosRes.data
}

export async function setCheckout(data:CheckoutTypes){
    const url = `${ROOT_API}${API_VERSION}/players/checkout`
    
    return callAPI({
        url,
        method: 'POST',
        data,
        token: true
    })
}