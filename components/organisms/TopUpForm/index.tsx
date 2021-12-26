import { PaymentTypes, NominalsTypes, BanksTypes } from "../../../services/data-types"
import ItemNominal from "./ItemNominal"
import {useState} from 'react'
import { toast } from 'react-toastify';
import {useRouter} from 'next/router'

interface TopUpFormProps {
    nominals: NominalsTypes[],
    payments: PaymentTypes[]
}

const TopUpForm = (props:TopUpFormProps) => {

    const [verifyID, setVerifyID] = useState('')
    const [accountName, setAccountName] = useState('')
    const [nominalItem, setNominalItem] = useState({})
    const [paymentItem, setPaymentItem] = useState({})
    const router = useRouter()
    const {nominals, payments} = props

    const onItemNominal = (data:NominalsTypes) => {
        setNominalItem(data)
    }

    const onItemPayment = (payment:PaymentTypes, bank:BanksTypes) => {
        const data = {
            payment,
            bank
        }
        setPaymentItem(data)
    }

    const onSubmit = () => {
        if((verifyID && accountName ) === '' || (nominalItem && paymentItem) === {}){
            toast.error('Please fill all the required fields')
        }else{
            const data = {
                verifyID,
                accountName,
                nominalItem,
                paymentItem
            }
            localStorage.setItem('data-topup', JSON.stringify(data))
            router.push('/checkout')
        }
    }

    return (
        <>
            <div className="md:pt-16 pt-8">
                <div className="">
                    <p className="text-lg font-medium text-blue-800 mb-4">
                        Verify ID
                    </p>
                    <input type="text" className="w-1/2 px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg" id="ID" name="ID"
                        aria-describedby="verifyID"
                        placeholder="Enter your ID"
                        value={verifyID}
                        onChange={(e:any) => setVerifyID(e.target.value)}
                    />
                </div>
            </div>
            <div className="md:py-14 pt-8 pb-6">
                <p className="text-lg font-medium text-blue-800 nd:mb-4 mb-0">
                    Nominal Top Up
                </p>
                <div className="flex flex-wrap">
                    {
                        nominals.map((nominal:any) => {
                            return <ItemNominal 
                                key={nominal._id}
                                card={'topup'}
                                _id={nominal._id}
                                coinQuantity={nominal.coinQuantity}
                                coinName={nominal.coinName}
                                price={nominal.price}
                                onChangeNominal={() => onItemNominal(nominal)}
                            />
                        })
                    }
                </div>
            </div>
            <div className="pb-md-50 pb-20">
                <p className="text-lg font-medium text-blue-800 nd:mb-4 mb-0">
                    Payment Method
                </p>
                <fieldset id="paymentMethod">
                    <div className="flex flex-wrap">
                        {
                            payments.map((payment:any) => 
                                payment.banks.map((bank:any) => {
                                    return(
                                        <ItemNominal 
                                            key={payment._id}
                                            card={'transfer'}
                                            bankID={bank._id}
                                            paymentType={payment.type}
                                            accountName={bank.name}
                                            bankName={bank.nameBank}
                                            onChangePayment={() => onItemPayment(payment, bank)}
                                        />
                                    )
                                })
                            )
                        }
                    </div>
                </fieldset>
            </div>
            <div className="pb-50">
                <p className="text-lg font-medium text-blue-800 mb-4">
                    Bank Account Name
                </p>
                <input type="text" className="w-1/2 px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg" id="bankAccount"
                    name="bankAccount" 
                    placeholder="Enter your Bank Account Name"
                    value={accountName}
                    onChange={(e:any) => setAccountName(e.target.value)}
                />
            </div>
            <div className="sm:block flex flex-col w-full">
                <button type="button"
                    onClick={onSubmit}
                    className="mt-8 px-8 py-2 text-center rounded-full font-medium bg-blue-600 text-white border-0 text-lg">
                    Continue
                </button>
            </div>
        </>
    )
}

export default TopUpForm