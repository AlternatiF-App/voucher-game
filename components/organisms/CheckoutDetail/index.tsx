import { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'

const CheckoutDetail = () => {

    const [dataTopUp, setDataTopUp] = useState({
        verifyID: '',
        nominalItem: {
            price: 0,
            coinQuantity: 0,
            coinName: '',
            _id: '',
        },
        paymentItem: {
            payment: {
                type: '',
                _id:''
            },
            bank:{
                nameBank: '',
                name: '',
                accountNumber: '',
                _id: ''
            }
        },
        accountName:''
    })

    const tax = dataTopUp.nominalItem.price * (10 / 100);
    const total = dataTopUp.nominalItem.price + tax;

    useEffect(() => {
        const dataTopUpFromLocal = localStorage.getItem('data-topup')
        const tataTopUpLocal = JSON.parse(dataTopUpFromLocal!)
        setDataTopUp(tataTopUpLocal)
    }, [])

    return (
        <>
        <div className="md:pt-14 pt-8">
            <h2 className="font-bold text-xl text-blue-800 mb-5">
                Purchase Details
            </h2>
            <p className="text-lg text-blue-800 mb-5">
                Your Game ID <span className="block float-right">{dataTopUp.verifyID}</span>
            </p>
            <p className="text-lg text-blue-800 mb-5">
                Order ID <span className="block float-right">#GG001</span>
            </p>
            <p className="text-lg text-blue-800 mb-5">
                Item <span className="block float-right">{dataTopUp.nominalItem.coinQuantity} {dataTopUp.nominalItem.coinName}</span>
            </p>
            <p className="text-lg text-blue-800 mb-5">
                Price <span className="block float-right"><NumberFormat value={dataTopUp.nominalItem.price} prefix="Rp. " displayType='text' thousandSeparator="." decimalSeparator="," /></span>
            </p>
            <p className="text-lg text-blue-800 mb-5">
                Tax (10%) <span className="block float-right"><NumberFormat value={tax} prefix="Rp. " displayType='text' thousandSeparator="." decimalSeparator="," /></span>
            </p>
            <p className="text-lg text-blue-800 mb-5">
                Total <span className="block float-right text-blue-400"><NumberFormat value={total} prefix="Rp. " displayType='text' thousandSeparator="." decimalSeparator="," /></span>
            </p>
        </div>
        <div className="md:py-14 py-6">
            <h2 className="font-bold text-xl text-blue-800 mb-6">
                Payment Informations
            </h2>
            <p className="text-lg text-blue-800 mb-6">
                Your Account Name <span className="block float-right">{dataTopUp.accountName}</span>
            </p>
            <p className="text-lg text-blue-800 mb-6">
                Type <span className="block float-right">{dataTopUp.paymentItem.payment.type}</span>
            </p>
            <p className="text-lg text-blue-800 mb-6">
                Bank Name <span className="block float-right">{dataTopUp.paymentItem.bank.nameBank}</span>
            </p>
            <p className="text-lg text-blue-800 mb-6">
                Bank Account Name <span className="block float-right">{dataTopUp.paymentItem.bank.name}</span>
            </p>
            <p className="text-lg text-blue-800 mb-6">
                Bank Number <span className="block float-right">{dataTopUp.paymentItem.bank.accountNumber}</span>
            </p>
        </div>
        </>
    )
}

export default CheckoutDetail