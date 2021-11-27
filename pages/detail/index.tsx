import ItemTopUp from "../../components/molecules/ItemTopUp"
import Footer from "../../components/organisms/Footer"
import Navbar from "../../components/organisms/Navbar"
import TopUpForm from "../../components/organisms/TopUpForm"

const Detail = () => {
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
                                    title1={'Mobile Legends'}
                                    title2={'The New Battle 2021'}
                                    category={'Mobile'}
                                />
                            </div>
                            <div className="w-full lg:w-3/4 md:pl-6">
                                <ItemTopUp 
                                    type={'mobile'}
                                    title1={'Mobile Legends'}
                                    title2={'The New Battle 2021'}
                                    category={'Mobile'}
                                />
                                <hr/>
                                <TopUpForm/>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default Detail