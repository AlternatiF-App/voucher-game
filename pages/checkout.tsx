import Image from 'next/image'
import ItemCheckout from "../components/organisms/ItemCheckout"
import CheckoutDetail from "../components/organisms/CheckoutDetail"
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation"

const Checkout = () => {
    return (
        <>
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
        </>
    )
}

export default Checkout