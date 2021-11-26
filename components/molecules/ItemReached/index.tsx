interface ItemReachedProps{
    count: string;
    title: string;
}

const ItemReached = ({count, title}:ItemReachedProps) => {
    return (
        <div className="me-lg-35">
            <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                {count}
            </p>
            <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                {title}
            </p>
        </div>
    )
}

export default ItemReached