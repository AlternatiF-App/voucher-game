import Category from './Category'
import TableRow from './TableRow'
import { useCallback, useEffect, useState } from 'react'
import { getMemberOverview } from '../../../services/member'
import {toast} from 'react-toastify'
import { HistoryTransactionTypes, TopUpCategoryTypes } from '../../../services/data-types'

const OverviewContent = () => {

    const [count, setCount] = useState([])
    const [data, setData] = useState([])

    const getMemberOverviewAPI = useCallback(async () => {
        const res = await getMemberOverview()
        if(res.error){
            toast.error(res.message)
        }else{
            setCount(res.data.count)
            setData(res.data.data)
        }
    }, [])

    useEffect(() => {
        getMemberOverviewAPI()
    }, [])

    return (
        <main className="w-3/4 h-screen overflow-y-auto hide-scroll-bar relative py-14">
            <div className="w-full">
                <h2 className="text-4xl font-bold text-blue-800 mb-8">
                    Overview
                </h2>
                <div className="px-6 rounded-2xl mb-8">
                    <p className="text-lg font-medium text-blue-800 mb-3">
                        Top Up Categories
                    </p>
                    <div className="flex space-x-10">
                        {
                            count.map((item:TopUpCategoryTypes) => {
                                return(
                                    <Category 
                                        key={item._id}
                                        icon={'desktop'}
                                        name={item.name}
                                        value={item.value}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="py-2 px-4">
                    <p className="text-lg font-medium text-blue-800 mb-8">Latest Transactions</p>
                    <div className="rounded-2xl px-4 py-2 overflow-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-blue-800 text-left">
                                    <th className="pb-4">Game</th>
                                    <th className="pb-4">Item</th>
                                    <th className="pb-4">Price</th>
                                    <th className="pb-4">Status</th>
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

export default OverviewContent