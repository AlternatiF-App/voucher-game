
const ItemCheckout = () => {
    return (
        <div className="flex flex-row items-center space-x-8 md:py-14 py-8">
            <div>
                <div className="h-36 w-56 overflow-hidden rounded-3xl">
                    <img src="/img/Thumbnail-3.png" className="max-w-full h-auto object-cover" alt=""/>
                </div>
            </div>
            <div>
                <p className="font-bold text-xl text-blue-800 mb-4">
                    Mobile Legends :<br/> The New Battle 2021
                </p>
                <p className="text-blue-600 m-0">
                    Category : Mobile
                </p>
            </div>
        </div>
    )
}

export default ItemCheckout