import {CheckCircleIcon} from '@heroicons/react/solid'

interface ItemNominal{
    card: string
    gold: number|string
    total:string
}

const ItemNominal = ({card, gold, total}:ItemNominal) => {
    return (
        <>
            {card === 'topup' 
            ? <label className="w-full lg:w-1/3 md:pl-4 md:pr-4 md:py-4 py-2">
                <input className="hidden" type="radio" id="topup1" name="topup" value="topup1"/>
                <div className="select-nominal transition-all duration-75 ease-linear rounded-3xl p-7 cursor-pointer">
                    <div className="flex justify-between">
                        <p className="text-3xl text-blue-800 m-0">
                            <span className="font-medium">
                                {gold}
                            </span> Gold
                        </p>
                        <CheckCircleIcon id="check-icon" className="h-6 w-6 transition-all duration-75 ease-linear" fill="#CDF1FF" stroke="none"/>
                    </div>
                    <p className="text-lg text-blue-800 m-0">Rp {total}</p>
                </div>
            </label>
            : <label className="w-full lg:w-1/3 md:pl-4 md:pr-4 md:py-4 py-2">
                <input className="hidden" type="radio" id="transfer" name="paymentMethod" value="transfer"/>
                <div className="select-nominal transition-all duration-75 ease-linear rounded-3xl p-7 cursor-pointer">
                    <div className="flex justify-between">
                        <p className="text-3xl text-blue-800 font-medium m-0">
                            {gold}
                        </p>
                        <CheckCircleIcon id="check-icon" className="h-6 w-6 transition-all duration-75 ease-linear" fill="#CDF1FF" stroke="none"/>
                    </div>
                    <p className="text-lg text-blue-800 m-0">{total}</p>
                </div>
            </label>
            }
        </>
    )
}

export default ItemNominal