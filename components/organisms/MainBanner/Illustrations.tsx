import Image from 'next/image'

const Illustrations = () => {
    return (
        <div className="relative hidden lg:block">
            <div className="flex lg:justify-end justify-center ml-2">
                <div className="position-relative">
                    <img src="/img/Header-1.png" className="img-fluid" alt=""/>
                    <div className="bg-white top-28 left-48 px-4 py-2 rounded-2xl absolute border-0">
                        <div className="flex items-center mb-4 gap-3">
                            <Image src="/img/Header-2.png" width={40} height={40} className="rounded-2xl"alt=""/>
                            <div>
                                <p className="text-sm font-medium text-blue-800 m-0">
                                    Ahmad Fanani
                                </p>
                                <p className="text-xs font-light text-blue-500 m-0">
                                    Professional Gamer
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <Image src="/icon/star.svg" width={20} height={18}/>
                            <Image src="/icon/star.svg" width={20} height={18}/>
                            <Image src="/icon/star.svg" width={20} height={18}/>
                            <Image src="/icon/star.svg" width={20} height={18}/>
                            <Image src="/icon/star.svg" width={20} height={18}/>
                        </div>
                    </div>
                    <div className="bg-white bottom-24 -right-12 px-4 py-2 rounded-2xl absolute border-0">
                        <div className="relative flex-row justify-center pb-6">
                            <img src="/img/Header-3.png" className="rounded-full" alt=""/>
                            <p className="bg-blue-200 w-full left-auto right-auto bottom-4 text-white text-xs text-center absolute m-0">
                                New
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-center m-0 font-medium text-blue-800">
                                Lann Knight
                            </p>
                            <p className="font-light text-center m-0 text-blue-400 text-xs">
                                Dota 2
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Illustrations