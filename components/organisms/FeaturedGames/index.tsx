import ItemGame from '../../molecules/ItemGame'

const FeaturedGames = () => {
    return (
        <section className="featured-game pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                    Our Featured<br/> Games This Year
                </h2>
                <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                    data-aos="fade-up">
                    <ItemGame img={'Thumbnail-1'} title={'Super Mechs'} desc={'Mobile'}/>
                    <ItemGame img={'Thumbnail-2'} title={'Call of Duty: Modern'} desc={'Mobile'}/>
                    <ItemGame img={'Thumbnail-3'} title={'Mobile Legends'} desc={'Mobile'}/>
                    <ItemGame img={'Thumbnail-4'} title={'Clash of Clans'} desc={'Mobile'}/>
                    <ItemGame img={'Thumbnail-5'} title={'Valorant'} desc={'Desktop'}/>
                </div>
            </div>
        </section>
    )
}

export default FeaturedGames