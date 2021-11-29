import Category from './Category'
import TableRow from './TableRow'

const OverviewContent = () => {
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
                    <div className="flex justify-between">
                        <Category icon={'desktop'} title1={'Game'} title2={'Desktop'} total={'18.000.500'}/>
                        <Category icon={'mobile'} title1={'Game'} title2={'Mobile'} total={'8.455.000'}/>
                        <Category icon={'other'} title1={'Other'} title2={'Categories'} total={'5.000.000'}/>
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
                                <TableRow 
                                    title={'Mobile Legends:The New Battle 2021'}
                                    category={'Desktop'}
                                    item={200}
                                    nominal={'290.000'}
                                    status={'Pending'}
                                    image={'overview-1'}
                                />
                                <TableRow 
                                    title={'Call of Duty:Modern'}
                                    category={'Desktop'}
                                    item={550}
                                    nominal={'740.000'}
                                    status={'Success'}
                                    image={'overview-2'}
                                />
                                <TableRow 
                                    title={'Clash of Clans'}
                                    category={'Mobile'}
                                    item={100}
                                    nominal={'120.000'}
                                    status={'Failed'}
                                    image={'overview-3'}
                                />
                                <TableRow 
                                    title={'The Royal Game'}
                                    category={'Mobile'}
                                    item={225}
                                    nominal={'200.000'}
                                    status={'Pending'}
                                    image={'overview-4'}
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default OverviewContent