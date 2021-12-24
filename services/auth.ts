import axios from 'axios'

const ROOT_API = 'https://voucher-game-server.herokuapp.com/'
const API_VERSION = 'api/v1'

export async function setSignUp(data:any){
    const res = await axios.post(`${ROOT_API}${API_VERSION}/auth/signup`, data)
    const axiosRes = res.data
    return axiosRes.data
}

export async function setLogin(){
    return null
}