import Category from './Category'
import TableRow from './TableRow'

const OverviewContent = () => {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                    Overview
                </h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">
                        Top Up Categories
                    </p>
                    <div className="main-content">
                        <div className="row">
                            <Category icon={'desktop'} title1={'Game'} title2={'Desktop'} total={'18.000.500'}/>
                            <Category icon={'mobile'} title1={'Game'} title2={'Mobile'} total={'8.455.000'}/>
                            <Category icon={'other'} title1={'Other'} title2={'Categories'} total={'5.000.000'}/>
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Game</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
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