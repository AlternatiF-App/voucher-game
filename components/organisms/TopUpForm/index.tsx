import ItemNominal from "./ItemNominal"

const TopUpForm = () => {
    return (
        <form action="./checkout.html" method="POST">
            <div className="md:pt-16 pt-8">
                <div className="">
                    <p className="text-lg font-medium text-blue-800 mb-4">
                        Verify ID
                    </p>
                    <input type="text" className="w-1/2 px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg" id="ID" name="ID"
                        aria-describedby="verifyID" placeholder="Enter your ID"/>
                </div>
            </div>
            <div className="md:py-14 pt-8 pb-6">
                <p className="text-lg font-medium text-blue-800 nd:mb-4 mb-0">
                    Nominal Top Up
                </p>
                <div className="flex flex-wrap">
                    <ItemNominal card={'topup'} gold={125} total={'3.250.000'}/>
                    <ItemNominal card={'topup'} gold={225} total={'3.250.000'}/>
                    <ItemNominal card={'topup'} gold={350} total={'3.250.000'}/>
                    <ItemNominal card={'topup'} gold={550} total={'3.250.000'}/>
                    <ItemNominal card={'topup'} gold={750} total={'3.250.000'}/>
                </div>
            </div>
            <div className="pb-md-50 pb-20">
                <p className="text-lg font-medium text-blue-800 nd:mb-4 mb-0">
                    Payment Method
                </p>
                <fieldset id="paymentMethod">
                    <div className="flex flex-wrap">
                        <ItemNominal card={'transfer'} gold={'Transfer'} total={'Worldwide Available'}/>
                        <ItemNominal card={'transfer'} gold={'VISA'} total={'Credit Card'}/>
                    </div>
                </fieldset>
            </div>
            <div className="pb-50">
                <p className="text-lg font-medium text-blue-800 mb-4">
                    Bank Account Name
                </p>
                <input type="text" className="w-1/2 px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg" id="bankAccount"
                    name="bankAccount" aria-describedby="bankAccount"
                    placeholder="Enter your Bank Account Name"/>
            </div>
            <div className="sm:block flex flex-col w-full">
                <a href="/checkout" type="submit"
                    className="mt-8 px-8 py-2 text-center rounded-full font-medium bg-blue-600 text-white border-0 text-lg">Continue</a>
            </div>
        </form>
    )
}

export default TopUpForm