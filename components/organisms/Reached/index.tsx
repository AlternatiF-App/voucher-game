import ItemReached from "../../molecules/ItemReached"

const Reached = () => {
    return (
        <section className="py-14 lg:container lg:mx-auto">
            <div>
                <div className="flex lg:flex-row flex-col items-center justify-center lg:space-x-8">
                    <ItemReached count={'290M+'} title={'Players Top Up'}/>
                        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                    <ItemReached count={'12.500'} title={'Games Available'}/>
                        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                    <ItemReached count={'99,9%'} title={'Happy Players'}/>
                        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                    <ItemReached count={'4.7'} title={'Rating Worldwide'}/>
                </div>
            </div>
        </section>
    )
}

export default Reached