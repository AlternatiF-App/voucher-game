
const CheckoutDetail = () => {
    return (
        <>
        <div className="md:pt-14 pt-8">
            <h2 className="font-bold text-xl text-blue-800 mb-5">
                Purchase Details
            </h2>
            <p className="text-lg text-blue-800 mb-5">
                Your Game ID <span className="block float-right">masayoshizero</span>
            </p>
            <p className="text-lg text-blue-800 mb-5">
                Order ID <span className="block float-right">#GG001</span>
            </p>
            <p className="text-lg text-blue-800 mb-5">
                Item <span className="block float-right">250 Diamonds</span>
            </p>
            <p className="text-lg text-blue-800 mb-5">
                Price <span className="block float-right">Rp 42.280.500</span>
            </p>
            <p className="text-lg text-blue-800 mb-5">
                Tax (10%) <span className="block float-right">Rp 4.228.000</span>
            </p>
            <p className="text-lg text-blue-800 mb-5">
                Total <span className="block float-right text-blue-400">Rp 55.000.600</span>
            </p>
        </div>
        <div className="md:py-14 py-6">
            <h2 className="font-bold text-xl text-blue-800 mb-6">
                Payment Informations
            </h2>
            <p className="text-lg text-blue-800 mb-6">
                Your Account Name <span className="block float-right">Masayoshi Angga Zero</span>
            </p>
            <p className="text-lg text-blue-800 mb-6">
                Type <span className="block float-right">Worldwide Transfer</span>
            </p>
            <p className="text-lg text-blue-800 mb-6">
                Bank Name <span className="block float-right">Mandiri</span>
            </p>
            <p className="text-lg text-blue-800 mb-6">
                Bank Account Name <span className="block float-right">PT Store GG Indonesia</span>
            </p>
            <p className="text-lg text-blue-800 mb-6">
                Bank Number <span className="block float-right">1800 - 9090 - 2021</span>
            </p>
        </div>
        </>
    )
}

export default CheckoutDetail