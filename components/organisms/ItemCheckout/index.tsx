import { useEffect, useState } from 'react'

const ItemCheckout = () => {

    const [dataItem, setDataItem] = useState({
        thumbnail: '',
        name: '',
        category: {
            name: ''
        }
    })

    useEffect(() => {
        const dataItemFromLocal = localStorage.getItem('data-item')
        const dataItemLocal = JSON.parse(dataItemFromLocal!)
        setDataItem(dataItemLocal)
    }, [])

    return (
        <div className="flex flex-row items-center space-x-8 md:py-14 py-8">
            <div>
                <div className="h-36 w-56 overflow-hidden rounded-3xl">
                    <img src={`https://voucher-game-server.herokuapp.com/uploads/${dataItem.thumbnail}`} className="max-w-full h-auto object-cover" alt=""/>
                </div>
            </div>
            <div>
                <p className="font-bold text-xl text-blue-800 mb-4">
                    {dataItem.name}
                </p>
                <p className="text-blue-600 m-0">
                    Category : {dataItem.category.name}
                </p>
            </div>
        </div>
    )
}

export default ItemCheckout