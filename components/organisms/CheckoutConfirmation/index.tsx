import {CheckIcon} from '@heroicons/react/solid'
import {useState} from 'react'
import {toast} from 'react-toastify'
import { setCheckout } from '../../../services/player'
import {useRouter} from 'next/router'

const CheckoutConfirmation = () => {

    const [checkbox, setCheckbox] = useState(false)
    const router = useRouter()
    
    const onSubmit = async () => {
        const dataItemLocal = localStorage.getItem('data-item')
        const dataTopUpLocal = localStorage.getItem('data-topup')
        const dataItem = JSON.parse(dataItemLocal!)
        const dataTopUp = JSON.parse(dataTopUpLocal!)

        if(!checkbox){
            toast.error('Did you already transfer the money?')
        }
        const data = {
            voucher: dataItem._id,
            nominal: dataTopUp.nominalItem._id,
            payment: dataTopUp.paymentItem.payment._id,
            bank: dataTopUp.paymentItem.bank._id,
            name: dataTopUp.accountName,
            accountUser: dataTopUp.verifyID
        }

        const res = await setCheckout(data)
        if(res.error){
            toast.error(res.message)
        }else{
            toast.success('Checkout Successfully')
            router.push('/complete-checkout')
        }
    }

    return (
        <>
            <label className="check-label blcok relative cursor-pointer pl-9 text-lg text-blue-800">
                I have transferred the money
                <input className="check-box appearance-none absolute left-0 top-0.5 cursor-pointer h-5 w-5 rounded-md border border-solid border-blue-400" 
                    type="checkbox"
                    checked={checkbox}
                    onChange={() => setCheckbox(!checkbox)}
                />
                <CheckIcon className="checkmark transition-all duration-75 ease-linear rounded-md absolute left-0 top-0.5 border border-solid border-blue-400 h-5 w-5 opacity-0 text-blue-800" fill="currentColor" stroke="none"/>
            </label>
            <div className="md:block flex flex-col w-full pt-14">
                <button className="px-8 py-2 rounded-full font-medium text-center text-white bg-blue-500 text-lg"
                    type="button"
                    onClick={onSubmit}
                >
                    Confirm Payment
                </button>
            </div>
        </>
    )
}

export default CheckoutConfirmation