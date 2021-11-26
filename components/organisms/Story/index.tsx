
const Story = () => {
    return (
        <section className="lg:container lg:mx-auto py-14">
            <div>
                <div className="grid lg:grid-cols-2 items-center lg:px-5 lg:gap-x-8">
                    <div className="hidden lg:flex lg:justify-end pr-14">
                        <img src="/img/Header-9.png" width="612" height="452" className="img-fluid" alt=""/>
                    </div>
                    <div className="lg:pl-14">
                        <div>
                            <h2 className="text-4xl font-bold text-blue-800 mb-8">
                                Win the battle.<br/> Be the Champion.
                            </h2>
                            <p className="text-lg text-blue-800 mb-8">
                                Kami menyediakan jutaan cara untuk
                                    <br className="sm:block"/>
                                membantu players menjadi
                                    <br className="sm:block"/>
                                pemenang sejati
                            </p>
                            <div className="md:block flex flex-col w-full">
                                <button className="px-12 py-2 bg-gray-300 text-black text-lg rounded-full">
                                    Read Story
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story