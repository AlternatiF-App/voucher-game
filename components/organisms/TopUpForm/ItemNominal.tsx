import {CheckCircleIcon} from '@heroicons/react/solid'
import NumberFormat from 'react-number-format'

interface ItemNominal{
    card: string
    _id?: string;
    coinQuantity?: number|string
    coinName?: string;
    price?:string;
    onChangeNominal?: () => void;

    bankID?: string;
    paymentType?: string;
    accountName?: string;
    bankName?: string;
    onChangePayment?: () => void;
}

const ItemNominal = ({card, _id, coinQuantity, coinName, price, onChangeNominal, bankID, paymentType, accountName, bankName, onChangePayment}:ItemNominal) => {
    return (
        <>
            {card === 'topup' 
            ? <label className="w-full lg:w-1/3 md:pl-4 md:pr-4 md:py-4 py-2"
                onChange={onChangeNominal}
            >
                <input className="hidden" type="radio" id={_id} name="topup" value={_id}/>
                <div className="select-nominal transition-all duration-75 ease-linear rounded-3xl p-7 cursor-pointer">
                    <div className="flex justify-between">
                        <p className="text-3xl text-blue-800 m-0">
                            <span className="font-medium">
                                {coinQuantity}
                            </span> {coinName}
                        </p>
                        <CheckCircleIcon id="check-icon" className="h-6 w-6 transition-all duration-75 ease-linear" fill="#CDF1FF" stroke="none"/>
                    </div>
                    <p className="text-lg text-blue-800 m-0">
                        <NumberFormat value={price} prefix="Rp. " displayType='text' thousandSeparator="." decimalSeparator="," />
                    </p>
                </div>
            </label>
            : <label className="w-full lg:w-1/3 md:pl-4 md:pr-4 md:py-4 py-2"
                onChange={onChangePayment}
            >
                <input className="hidden" type="radio" id={bankID} name="paymentMethod" value={bankID}/>
                <div className="select-nominal transition-all duration-75 ease-linear rounded-3xl p-7 cursor-pointer">
                    <div className="flex justify-between">
                        <p className="text-3xl text-blue-800 font-medium m-0">
                            {paymentType}
                        </p>
                        <CheckCircleIcon id="check-icon" className="h-6 w-6 transition-all duration-75 ease-linear" fill="#CDF1FF" stroke="none"/>
                    </div>
                    <p className="text-lg text-blue-800 m-0">{accountName}</p>
                    <p className="text-lg text-blue-800 m-0">{bankName}</p>
                </div>
            </label>
            }
        </>
    )
}

export default ItemNominal