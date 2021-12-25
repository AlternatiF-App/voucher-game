import Link from 'next/link'

const CompleteCheckout = () => {
    return (
        <>
            <section className="container mx-auto py-36 pt-24 pb-20">
                <div className="">
                    <div className="flex justify-center mx-auto w-4/6 lg:w-full">
                        <img src="/icon/complete-checkout.svg" className="max-w-full"/>
                    </div>
                    <div className="pt-16 pb-14">
                        <h2 className="text-4xl font-bold text-center text-blue-800 mb-4">Checkout Completed</h2>
                        <p className="text-lg text-center text-blue-800 m-0">Kami akan periksa pembayaran Anda
                            <br className="sm:block hidden"/> dan menghubungi via WhatsApp
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link href="/member">
                            <button className="px-8 py-2 w-full lg:w-3/12 font-medium text-lg bg-blue-600 text-white rounded-full mb-6">
                                My Dashboard
                            </button>
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <a className="text-center px-8 py-2 w-full lg:w-3/12 font-medium text-lg bg-gray-200 rounded-full"
                            href="https://wa.me/6282142931584?text=Saya%20sudah%20melakukan%20pembayaran"
                        >
                            WhatsApp ke Admin
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompleteCheckout