import ItemGame from '../../molecules/ItemGame'
import { useCallback, useEffect, useState } from 'react'
import { getFeaturedGames } from '../../../services/player'
import { GameItemTypes } from '../../../services/data-types'

const FeaturedGames = () => {

    const [gameList, setGameList] = useState([])

    const getFeaturedGamesList = useCallback(async () => {
        const data = await getFeaturedGames()
        setGameList(data)
    }, [getFeaturedGames])

    useEffect(() => {
        getFeaturedGamesList()
    },[])

    return (
        <section className="lg:container lg:mx-auto py-14">
            <div className="container-fluid">
                <h2 className="text-4xl font-bold text-blue-800 mb-8">
                    Our Featured<br/> Games This Year
                </h2>
                <div className="flex overflow-x-auto hide-scroll-bar lg:justify-between lg:space-x-8 space-x-6">
                    {
                        gameList.map((item:GameItemTypes) => {
                            return (
                                <ItemGame 
                                    id={item._id}
                                    key={item._id}
                                    img={item.thumbnail}
                                    title={item.name}
                                    desc={item.category.name}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedGames