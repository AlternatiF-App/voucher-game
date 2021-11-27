interface ItemTopUpProps{
    type: 'desktop' | 'mobile';
    title1: string;
    title2: string;
    category: string;
}

const ItemTopUp = ({type, title1, title2, category}:ItemTopUpProps) => {
    return (
        <>
        {type === 'desktop' 
        ? <div className="flex space-x-4 lg:space-x-0 items-center">
            <div className="w-2/5 lg:w-full">
                <img src="/img/Thumbnail-3.png" width="280" height="380" className="max-w-full h-auto rounded-3xl" alt=""/>
            </div>
            <div className="w-3/5 md:hidden block">
                <h2 className="text-xl font-bold text-blue-800 text-left mb-3">
                    {title1} : <br/> {title2}
                </h2>
                <p className="text-sm text-blue-600 text-left mb-0">
                    Category : {category}
                </p>
            </div>
        </div>
        : <div className="pb-16 md:block hidden">
            <h2 className="text-4xl font-bold text-blue-800 text-left my-3">
                {title1} : <br/> {title2}
            </h2>
            <p className="text-lg text-blue-600 mb-0">
                Category : {category}
            </p>
        </div>}
        </>
    )
}

export default ItemTopUp