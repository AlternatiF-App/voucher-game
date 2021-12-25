import Sidebar from "../../../components/organisms/Sidebar"
import TransactionContent from "../../../components/organisms/TransactionContent"
import jwtDecode from 'jwt-decode'

const Transactions = () => {
    return (
        <>
            <section className="w-full flex overflow-auto">
                <Sidebar activeMenu={'transactions'}/>
                <TransactionContent/>
            </section>
        </>
    )
}

export async function getServerSideProps({req}:any){
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
    const userPayload = payload.player

    return {
        props : {
            user: userPayload
        }
    }
}

export default Transactions