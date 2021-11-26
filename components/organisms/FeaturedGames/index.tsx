import ItemGame from '../../molecules/ItemGame'

const FeaturedGames = () => {
    return (
        <section className="lg:container lg:mx-auto py-14">
            <div className="container-fluid">
                <h2 className="text-4xl font-bold text-blue-800 mb-8">
                    Our Featured<br/> Games This Year
                </h2>
                <div className="flex overflow-x-auto hide-scroll-bar lg:justify-between lg:space-x-8 space-x-6">
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