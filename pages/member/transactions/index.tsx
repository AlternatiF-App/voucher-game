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
    return {
        props : {}
    }
}

export default Transactions