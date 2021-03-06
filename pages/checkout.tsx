import Image from 'next/image'
import ItemCheckout from "../components/organisms/ItemCheckout"
import CheckoutDetail from "../components/organisms/CheckoutDetail"
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation"
import jwtDecode from 'jwt-decode'
import { UserTypes } from '../services/data-types'

// interface CheckoutProps{
//     user: UserTypes
// }

const Checkout = () => {

    // const {user} = props

    return (
        <section className="w-full lg:w-1/2 mx-auto md:py-24 py-8">
            <div>
                <div className="md:text-center text-left pb-14">
                    <div>
                        <Image src="/icon/logo.svg" width={60} height={60}/>
                    </div>
                </div>
                <div className="pt-14 lg:pt-0">
                    <h2 className="text-4xl font-bold text-blue-800 mb-3">
                        Checkout
                    </h2>
                    <p className="text-lg text-blue-800 mb-0">
                        Waktunya meningkatkan cara bermain
                    </p>
                </div>
                <ItemCheckout/>
                <hr/>
                <CheckoutDetail/>
                <CheckoutConfirmation/>
            </div>
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

    const jwt_token = Buffer.from(token, 'base64').toString('ascii');
    const payload:any = jwtDecode(jwt_token)
    const userPayload = payload.player

    return {
        props : {
            user: userPayload
        }
    }
}

export default Checkout