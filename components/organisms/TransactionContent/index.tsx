import { useCallback, useEffect, useState } from 'react'
import { getMemberTransactions } from '../../../services/member'
import { toast } from 'react-toastify'
import TableRow from '../OverviewContent/TableRow'
import NumberFormat from 'react-number-format'
import Link from 'next/link'
import { HistoryTransactionTypes } from '../../../services/data-types'

const TransactionContent = () => {

    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    const [tab, setTab] = useState('all')

    const getMemberTransaction = useCallback(async (value) => {
        const res = await getMemberTransactions(value)
        if(res.error){
            toast.error(res.message)
        }else{
            setTotal(res.data.total)
            setData(res.data.data)
        }
    }, [])

    useEffect(() => {
        getMemberTransaction('all')
    }, [])

    const onTabClick = (value: string) => {
        setTab(value)
        getMemberTransaction(value)
    }

    return (
        <main className="w-full lg:w-3/4 h-screen overflow-y-auto hide-scroll-bar relative px-4 py-4 lg:px-0 lg:py-14">
            <div>
                <h2 className="text-xl lg:text-4xl font-bold text-blue-800 pb-4 lg:pb-8">My Transactions</h2>
                <div className="pb-4 lg:pb-8">
                    <p className="text-base lg:text-lg text-blue-600 mb-4">
                        You’ve spent
                    </p>
                    <h3 className="text-3xl lg:text-5xl font-medium text-blue-800">
                        <NumberFormat value={total} prefix="Rp. " displayType='text' thousandSeparator="." decimalSeparator="," />
                    </h3>
                </div>
                <div className="py-4 lg:pt-8 lg:pb-6">
                    <div className="flex space-x-2 lg:space-x-6 items-center">
                        <button onClick={() => onTabClick('all')} className={`${tab === 'all' ? ('bg-blue-600 text-white') : 'bg-gray-200'} px-2 lg:px-8 py-2 rounded-full text-sm`}>
                            All Trx
                        </button>
                        <button onClick={() => onTabClick('Success')}className={`${tab === 'Success' ? ('bg-blue-600 text-white') : 'bg-gray-200'} px-2 lg:px-8 py-2 rounded-full text-sm`}>
                            Success
                        </button>
                        <button onClick={() => onTabClick('Pending')}className={`${tab === 'Pending' ? ('bg-blue-600 text-white') : 'bg-gray-200'} px-2 lg:px-8 py-2 rounded-full text-sm`}>
                            Pending
                        </button>
                        <button onClick={() => onTabClick('Failed')}className={`${tab === 'Failed' ? ('bg-blue-600 text-white') : 'bg-gray-200'} px-2 lg:px-8 py-2 rounded-full text-sm`}>
                            Failed
                        </button>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <div>
                        <p className="text-base font-medium text-blue-800 mb-6">Latest Transactions</p>
                        <div className="space-y-4">
                            {
                                data.map((item:HistoryTransactionTypes) => {
                                    const imgUrl = item.historyVoucherTopup.thumbnail
                                    return(
                                        <div className="px-4 py-2 rounded-xl shadow-md">
                                            <div className="flex space-x-3">
                                                <div>
                                                    <img className="float-left h-20 w-20 object-cover rounded-xl"
                                                        src={`https://voucher-game-server.herokuapp.com/uploads/${imgUrl}`} alt=""/>
                                                </div>
                                                <p>
                                                    <span className="block font-bold">{item.historyVoucherTopup.gameName}</span>
                                                    <span className="block">{item.historyVoucherTopup.category}</span>
                                                    <div className='flex items-center space-x-2 pt-2'>
                                                        {item.status === 'Pending' && <div className="float-left h-3 w-3 bg-yellow-600 rounded-full"></div>}
                                                        {item.status === 'Success' && <div className="float-left h-3 w-3 bg-green-600 rounded-full"></div>}
                                                        {item.status === 'Failed' && <div className="float-left h-3 w-3 bg-red-600 rounded-full"></div>}
                                                        <p className="font-medium text-left text-blue-800 m-0 relative">
                                                            {item.status}
                                                        </p>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="pt-4">
                                                <span className="block">
                                                    <span className="font-medium text-blue-800">{item.historyVoucherTopup.coinQuantity}</span>
                                                    <span className="font-bold text-blue-600"> {item.historyVoucherTopup.coinName}</span>
                                                </span>
                                                <span>
                                                    <NumberFormat 
                                                        value={item.historyVoucherTopup.price}
                                                        prefix="Rp. "
                                                        displayType='text'
                                                        thousandSeparator="."
                                                        decimalSeparator=","
                                                    />
                                                </span>
                                            </div>
                                            <div className="pt-4 w-full">
                                                <Link href={`/member/transactions/${item._id}`}>
                                                    <button type="button" className="rounded-full w-full py02 bg-blue-600 text-base">
                                                        Details
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <p className="text-lg font-medium text-blue-800 mb-14">Latest Transactions</p>
                    <div className="overflow-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="color-palette-1 text-left">
                                    <th className="pb-6">Game</th>
                                    <th className="pb-6">Item</th>
                                    <th className="pb-6">Price</th>
                                    <th className="pb-6">Status</th>
                                    <th className="pb-6">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item:HistoryTransactionTypes) => {
                                        return(
                                            <TableRow 
                                                key={item._id}
                                                id={item._id}
                                                title={item.historyVoucherTopup.gameName}
                                                category={item.historyVoucherTopup.category}
                                                item={item.historyVoucherTopup.coinQuantity}
                                                coinName={item.historyVoucherTopup.coinName}
                                                nominal={item.historyVoucherTopup.price}
                                                status={item.status}
                                                image={item.historyVoucherTopup.thumbnail}
                                                page={'transactions'}
                                            />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TransactionContent