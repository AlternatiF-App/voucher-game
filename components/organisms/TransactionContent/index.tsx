import { useCallback, useEffect, useState } from 'react'
import { getMemberTransactions } from '../../../services/member'
import { toast } from 'react-toastify'
import TableRow from '../OverviewContent/TableRow'
import NumberFormat from 'react-number-format'
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
        <main className="w-3/4 h-screen overflow-y-auto hide-scroll-bar relative py-14">
            <div>
                <h2 className="text-4xl font-bold text-blue-800 mb-8">My Transactions</h2>
                <div className="mb-8">
                    <p className="text-lg text-blue-600 mb-4">
                        You’ve spent
                    </p>
                    <h3 className="text-5xl font-medium text-blue-800">
                        <NumberFormat value={total} prefix="Rp. " displayType='text' thousandSeparator="." decimalSeparator="," />
                    </h3>
                </div>
                <div className="row mt-8 mb-6">
                    <div className="flex space-x-6 items-center">
                        <button onClick={() => onTabClick('all')} className={`${tab === 'all' ? ('bg-blue-600 text-white') : 'bg-gray-200'} px-8 py-2 rounded-full text-sm`}>
                            All Trx
                        </button>
                        <button onClick={() => onTabClick('Success')}className={`${tab === 'Success' ? ('bg-blue-600 text-white') : 'bg-gray-200'} px-8 py-2 rounded-full text-sm`}>
                            Success
                        </button>
                        <button onClick={() => onTabClick('Pending')}className={`${tab === 'Pending' ? ('bg-blue-600 text-white') : 'bg-gray-200'} px-8 py-2 rounded-full text-sm`}>
                            Pending
                        </button>
                        <button onClick={() => onTabClick('Failed')}className={`${tab === 'Failed' ? ('bg-blue-600 text-white') : 'bg-gray-200'} px-8 py-2 rounded-full text-sm`}>
                            Failed
                        </button>
                    </div>
                </div>
                <div>
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
                                                title={item.historyVoucherTopup.gameName}
                                                category={item.historyVoucherTopup.category}
                                                item={item.historyVoucherTopup.coinQuantity}
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