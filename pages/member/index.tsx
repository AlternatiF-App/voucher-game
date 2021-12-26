import OverviewContent from "../../components/organisms/OverviewContent"
import Sidebar from "../../components/organisms/Sidebar"

const Member = () => {
    return (
        <section className="w-full flex overflow-auto">
            <Sidebar activeMenu={'overview'}/>
            <OverviewContent/>
        </section>
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

export default Member