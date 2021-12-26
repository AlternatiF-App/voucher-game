import Category from './Category'
import TableRow from './TableRow'
import { useCallback, useEffect, useState } from 'react'
import { getMemberOverview } from '../../../services/member'
import {toast} from 'react-toastify'
import NumberFormat from 'react-number-format'
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
        <main className="w-full lg:w-3/4 h-screen overflow-y-auto hide-scroll-bar relative px-4 py-4 lg:px-0 lg:py-14">
            <div className="w-full">
                <h2 className="text-xl lg:text-4xl font-bold text-blue-800 pb-4 lg:pb-8">
                    Overview
                </h2>
                <div className="px-6 rounded-2xl pb-4 lg:pb-8">
                    <p className="text-lg font-medium text-blue-800 mb-3">
                        Top Up Categories
                    </p>
                    <div className="lg:flex space-y-4 lg:space-y-0 lg:space-x-10">
                        {
                            count.map((item:TopUpCategoryTypes) => {
                                return(
                                    <Category 
                                        key={item._id}
                                        id={item._id}
                                        icon={'desktop'}
                                        name={item.name}
                                        value={item.value}
                                    />
                                )
                            })
                        }
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
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block py-2 px-4">
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
                                                id={item._id}
                                                title={item.historyVoucherTopup.gameName}
                                                category={item.historyVoucherTopup.category}
                                                item={item.historyVoucherTopup.coinQuantity}
                                                coinName={item.historyVoucherTopup.coinName}
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