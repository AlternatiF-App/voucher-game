import Image from 'next/image';

const Footer = () => {
    return (
        <section className="w-full lg:w-11/12 lg:mx-auto px-4 py-6 lg:py-20 mt-14">
            <footer>
                <div className="container-fluid">
                    <div className="lg:flex">
                        <div className="w-full lg:w-2/5 lg:text-left text-center">
                            <div className="mb-8">
                                <Image src="/icon/logo.svg" width={60} height={60}/>
                            </div>
                            <p className="mt-8 text-lg text-blue-800 mb-8">
                                StoreGG membantu gamers<br/> 
                                untuk menjadi pemenang sejati
                            </p>
                            <p className="mt-8 text-lg text-blue-800 mb-8">
                                Copyright 2021. All Rights Reserved.
                            </p>
                        </div>
                        <div className="w-full lg:w-3/5 lg:pt-0 pt-8">
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0">
                                <div className="lg:mb-0 mb-6">
                                    <p className="text-lg font-semibold text-blue-800 mb-8">
                                        Company
                                    </p>
                                    <ul className="text-blue-800 space-y-3">
                                        <li>
                                            <a className="text-lg no-underline cursor-pointer">About Us</a>
                                        </li>
                                        <li>
                                            <a className="text-lg no-underline cursor-pointer">Press Release</a>
                                        </li>
                                        <li>
                                            <a className="text-lg no-underline cursor-pointer">Terms of Use</a>
                                        </li>
                                        <li>
                                            <a className="text-lg no-underline cursor-pointer">Privacy & Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lg:mb-0 mb-6">
                                    <p className="text-lg font-semibold text-blue-800 mb-8">
                                        Support
                                    </p>
                                    <ul className="text-blue-800 space-y-3">
                                        <li>
                                            <a className="text-lg no-underline cursor-pointer">Refund Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-lg no-underline cursor-pointer">Unlock Rewards</a>
                                        </li>
                                        <li>
                                            <a className="text-lg no-underline cursor-pointer">Live Chatting</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lg:mb-0 mb-6">
                                    <p className="text-lg font-semibold text-blue-800 mb-8">
                                        Connect
                                    </p>
                                    <ul className="text-blue-800 space-y-3">
                                        <li>
                                            <a className="text-lg no-underline cursor-pointer">hi@store.gg</a>
                                        </li>
                                        <li>
                                            <a className="text-lg no-underline cursor-pointer">team@store.gg</a>
                                        </li>
                                        <li>
                                            <a className="text-lg no-underline cursor-pointer">Pasific 12, Jakarta Selatan</a>
                                        </li>
                                        <li>
                                            <a className="text-lg no-underline cursor-pointer">021 - 1122 - 9090</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer