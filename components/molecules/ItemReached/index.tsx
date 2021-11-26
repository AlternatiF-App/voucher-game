interface ItemReachedProps{
    count: string;
    title: string;
}

const ItemReached = ({count, title}:ItemReachedProps) => {
    return (
        <div className="lg:mr-10">
            <p className="text-4xl lg:text-left text-center text-blue-800 font-bold m-0">
                {count}
            </p>
            <p className="text-lg lg:text-left text-center text-blue-800 m-0">
                {title}
            </p>
        </div>
    )
}

export default ItemReached