import callAPI from '../config'

const ROOT_API = 'https://voucher-game-server.herokuapp.com/'
const API_VERSION = 'api/v1'

export async function getMemberOverview(){
    const url = `${ROOT_API}${API_VERSION}/players/dashboard`
    
    return callAPI({
        url,
        method: 'GET',
        token: true
    })
}

export async function getMemberTransactions(valueParams:string){
    let params = ''
    if(valueParams === 'all'){
        params = ''
    }else{
        params = `?status=${valueParams}`
    }
    const url = `${ROOT_API}${API_VERSION}/players/history${params}`
    
    return callAPI({
        url,
        method: 'GET',
        token: true
    })
}