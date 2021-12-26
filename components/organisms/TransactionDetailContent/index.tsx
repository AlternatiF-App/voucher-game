import { HistoryTransactionTypes } from '../../../services/data-types'
import Row from './Row'

interface TransactionDetailContentProps{
    data: HistoryTransactionTypes
}

const TransactionDetailContent = ({data}:TransactionDetailContentProps) => {

    return (
        <main className="w-3/4 h-screen overflow-y-auto hide-scroll-bar relative py-14 px-24">
            <div className="lg:pl-0">
                <h2 className="text-4xl font-bold text-blue-600 mb-8">
                    Details #{data._id}
                </h2>
                <div>
                    <div className="bg-white p-8 rounded-2xl overflow-auto">
                        <section className="">
                            <div className="flex flex-row items-center justify-between mb-8">
                                <div className="flex flex-row items-center">
                                    <div className="pr-4">
                                        <div className="w-48 h-28">
                                            <img src={`https://voucher-game-server.herokuapp.com/uploads/${data.historyVoucherTopup.thumbnail}`}
                                                className="h-28 w-48 object-cover rounded-2xl" alt=""/>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl text-blue-600 mb-10">
                                            {data.historyVoucherTopup.gameName}
                                        </p>
                                        <p className="text-blue-400 m-0">
                                            Category: {data.historyVoucherTopup.category}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    {
                                        data.status === 'Pending' && <p className="bg-yellow-200 font-medium text-center px-8 py-2 rounded-full">
                                            {data.status}
                                        </p>
                                    }
                                    {
                                        data.status === 'Success' && <p className="bg-green-200 font-medium text-center px-8 py-2 rounded-full">
                                            {data.status}
                                        </p>
                                    }
                                    {
                                        data.status === 'Failed' && <p className="bg-red-200 font-medium text-center px-8 py-2 rounded-full">
                                            {data.status}
                                        </p>
                                    }
                                </div>
                            </div>
                            <hr/>
                            <div className="purchase pt-8">
                                <h2 className="font-bold text-xl text-blue-600 mb-6">
                                    Purchase Details
                                </h2>
                                <Row 
                                    label={'Your Game ID'}
                                    value={data.accountUser}
                                />
                                <Row 
                                    label={'Order ID'}
                                    value={`#${data._id}`}
                                />
                                <Row 
                                    label={'Item'}
                                    value={data.historyVoucherTopup.coinQuantity + ' ' + data.historyVoucherTopup.coinName}
                                />
                                <Row 
                                    label={'Price'}
                                    value={data.historyVoucherTopup.price}
                                />
                                <Row 
                                    label={'Tax (10%)'}
                                    value={data.tax}
                                />
                                <Row 
                                    label={'Total'}
                                    value={data.value}
                                    className={'text-blue-800'}
                                />
                            </div>
                            <div className="payment py-3">
                                <h2 className="font-bold text-xl text-blue-600 mb-6">
                                    Payment Informations
                                </h2>
                                <Row 
                                    label={'Your Account Name'}
                                    value={data.name}
                                />
                                <Row 
                                    label={'Type'}
                                    value={data.historyPayment.type}
                                />
                                <Row 
                                    label={'Bank Name'}
                                    value={data.historyPayment.nameBank}
                                />
                                <Row 
                                    label={'Bank Account Name'}
                                    value={data.historyPayment.name}
                                />
                                <Row 
                                    label={'Bank Number'}
                                    value={data.historyPayment.accountNumber}
                                />
                            </div>
                            <div className="md:block flex flex-col w-full">
                                <a className="rounded-full px-6 py-2 bg-blue-600 font-medium text-white border-0 text-lg" role="button"
                                    href="https://wa.me/6282142931584?text=Saya%20sudah%20melakukan%20pembayaran"
                                >
                                    WhatsApp ke Admin
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TransactionDetailContent