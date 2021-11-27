import {CheckIcon} from '@heroicons/react/solid'

const CheckoutConfirmation = () => {
    return (
        <>
            <label className="check-label blcok relative cursor-pointer pl-9 text-lg text-blue-800">
                I have transferred the money
                <input className="check-box appearance-none absolute left-0 top-0.5 cursor-pointer h-5 w-5 rounded-md border border-solid border-blue-400" type="checkbox"/>
                <CheckIcon className="checkmark transition-all duration-75 ease-linear rounded-md absolute left-0 top-0.5 border border-solid border-blue-400 h-5 w-5 opacity-0 text-blue-800" fill="currentColor" stroke="none"/>
            </label>
            <div className="md:block flex flex-col w-full pt-14">
                <button className="px-8 py-2 rounded-full font-medium text-center text-white bg-blue-500 text-lg">
                    Confirm Payment
                </button>
            </div>
        </>
    )
}

export default CheckoutConfirmation