import Footer from "../components/organisms/Footer"
import Navbar from "../components/organisms/Navbar"
import Image from 'next/image'
import ItemCheckout from "../components/organisms/ItemCheckout"
import CheckoutDetail from "../components/organisms/CheckoutDetail"
import CompleteCheckout from "./complete-checkout"

const Checkout = () => {
    return (
        <>
            <Navbar/>
                <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
                    <div className="container-fluid">
                        <div className="logo text-md-center text-start pb-50">
                            <a className="" href="#">
                                <Image src="/icon/logo.svg" width={60} height={60}/>
                            </a>
                        </div>
                        <div className="title-text pt-md-50 pt-0">
                            <h2 className="text-4xl fw-bold color-palette-1 mb-10">
                                Checkout
                            </h2>
                            <p className="text-lg color-palette-1 mb-0">
                                Waktunya meningkatkan cara bermain
                            </p>
                        </div>
                        <ItemCheckout/>
                        <hr/>
                        <CheckoutDetail/>
                        <CompleteCheckout/>
                    </div>
                </section>  
            <Footer/> 
        </>
    )
}

export default Checkout