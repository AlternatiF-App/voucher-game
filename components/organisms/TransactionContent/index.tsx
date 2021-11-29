import React from 'react'
import TableRow from '../OverviewContent/TableRow'

const TransactionContent = () => {
    return (
        <main className="w-3/4 h-screen overflow-y-auto hide-scroll-bar relative py-14">
            <div>
                <h2 className="text-4xl font-bold text-blue-800 mb-8">My Transactions</h2>
                <div className="mb-8">
                    <p className="text-lg text-blue-600 mb-4">
                        You’ve spent
                    </p>
                    <h3 className="text-5xl font-medium text-blue-800">
                        Rp 4.518.000.500
                    </h3>
                </div>
                <div className="row mt-8 mb-6">
                    <div className="flex space-x-6 items-center">
                        <a data-filter="*" href="#" className="px-8 py-2 rounded-full text-sm bg-blue-600 text-white">
                            All Trx
                        </a>
                        <a data-filter="success" href="#" className="px-8 py-2 rounded-full text-sm bg-gray-200">
                            Success
                        </a>
                        <a data-filter="pending" href="#" className="px-8 py-2 rounded-full text-sm bg-gray-200">
                            Pending
                        </a>
                        <a data-filter="failed" href="#" className="px-8 py-2 rounded-full text-sm bg-gray-200">
                            Failed
                        </a>
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
                                <TableRow 
                                    title={'Mobile Legends:The New Battle 2021'}
                                    category={'Desktop'}
                                    item={200}
                                    nominal={'290.000'}
                                    status={'Pending'}
                                    image={'overview-1'}
                                    page={'transactions'}
                                />
                                <TableRow 
                                    title={'Call of Duty:Modern'}
                                    category={'Desktop'}
                                    item={550}
                                    nominal={'740.000'}
                                    status={'Success'}
                                    image={'overview-2'}
                                    page={'transactions'}
                                />
                                <TableRow 
                                    title={'Clash of Clans'}
                                    category={'Mobile'}
                                    item={100}
                                    nominal={'120.000'}
                                    status={'Failed'}
                                    image={'overview-3'}
                                    page={'transactions'}
                                />
                                <TableRow 
                                    title={'The Royal Game'}
                                    category={'Mobile'}
                                    item={225}
                                    nominal={'200.000'}
                                    status={'Pending'}
                                    image={'overview-4'}
                                    page={'transactions'}
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TransactionContent