import Sidebar from "../../../components/organisms/Sidebar"
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent"
import jwtDecode from 'jwt-decode'
import { getTransactionsDetail } from "../../../services/member"
import { HistoryTransactionTypes } from "../../../services/data-types"

interface TransactionDetailProps{
    transactionDetail: HistoryTransactionTypes;
}

const DetailTransition = ({transactionDetail}:TransactionDetailProps) => {
    return (
        <section className="w-full lg:flex overflow-auto">
            <Sidebar activeMenu={'transactions'}/>
            <TransactionDetailContent data={transactionDetail}/>
        </section>   
    )
}

export async function getServerSideProps({req, params}:any){
    const {idTrx} = params
    const { token } = req.cookies
    if(!token){
        return {
            redirect: {
                destination:'/sign-in',
                permanent: false
            }
        }
    }

    const jwt_token = Buffer.from(token, 'base64').toString('ascii');
    const payload:any = jwtDecode(jwt_token)
    const res = await getTransactionsDetail(idTrx, jwt_token)
    return {
        props : {
            transactionDetail:res.data
        }
    }
}

export default DetailTransition