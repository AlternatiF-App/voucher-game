import {useCallback, useEffect, useState} from 'react'
import { useRouter } from "next/router"
import ItemTopUp from "../../components/molecules/ItemTopUp"
import Footer from "../../components/organisms/Footer"
import Navbar from "../../components/organisms/Navbar"
import TopUpForm from "../../components/organisms/TopUpForm"
import { getDetailVoucher, getPayments } from '../../services/player'

const Detail = () => {

    const {query, isReady} = useRouter()
    const [dataItem, setDataItem] = useState({
        name: '',
        thumbnail: '',
        category: {
            name: ''
        }
    })
    const [nominals, setNominals] = useState([])
    const [payments, setPayments] = useState([])

    const getVoucherDetailAPI = useCallback(async (id) => {
        const data = await getDetailVoucher(id)
        setDataItem(data)
        localStorage.setItem('data-item', JSON.stringify(data))
        setNominals(data.nominals)
    }, [])

    const getPaymentsAPI = useCallback(async () => {
        const data = await getPayments()
        setPayments(data)
    }, [])

    useEffect(() => {
        if(isReady) {
            getVoucherDetailAPI(query.id)
            getPaymentsAPI()
        }
    }, [isReady])

    return (
        <>
            <Navbar/>
                <section className="detail lg:container lg:mx-auto px-4 lg:pt-16 pt-14">
                    <div>
                        <div className="detail-header pb-14">
                            <h2 className="text-4xl font-bold text-blue-800 text-left mb-1">
                                Top Up
                            </h2>
                            <p className="text-lg text-blue-800 mb-0">
                                Perkuat akun dan jadilah pemenang
                            </p>
                        </div>
                        <div className="lg:flex lg:space-x-4">
                            <div className="w-full lg:w-1/4 pb-8 md:pb-0 md:pr-2 md:text-left">
                                <ItemTopUp 
                                    type={'desktop'}
                                    data={dataItem}
                                />
                            </div>
                            <div className="w-full lg:w-3/4 md:pl-6">
                                <ItemTopUp 
                                    type={'mobile'}
                                    data={dataItem}
                                />
                                <hr/>
                                <TopUpForm nominals={nominals} payments={payments}/>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default Detail