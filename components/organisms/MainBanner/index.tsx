import Illustrations from './Illustrations'

const MainBanner = () => {
    return (
        <section className="lg:container lg:mx-auto px-4 lg:px-0 lg:pt-14 pt-8 lg:pb-0 pb-10">
            <div className="">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="my-auto">
                        <p className="text-sm lg:text-lg text-blue-400">
                            Halo gamers,
                        </p>
                        <h1 className="text-4xl lg:text-5xl text-blue-800 font-bold pt-5">
                            Topup & Get <span className="underline">a</span>
                            <span className="underline"> New</span>
                            <br className="block"/>
                            <span className="underline">Experience</span> in Gaming
                        </h1>
                        <p className="pt-10 lg:pt-12 pb-10 text-sm lg:text-lg text-blue-400">
                            Kami menyediakan jutaan cara untuk membantu<br className="d-md-block d-none"/> 
                            players menjadi pemenang sejati
                        </p>
                        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-2">
                            <button className="px-8 py-2 bg-blue-500 text-lg text-white rounded-full">
                                Get Started
                            </button>
                            <button className="underline text-lg text-blue-400 my-auto text-center">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <Illustrations/>
                </div>
            </div>
        </section>
    )
}

export default MainBanner