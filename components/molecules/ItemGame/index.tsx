import Link from 'next/link'

interface ItemGameProps{
    img: 'Thumbnail-1' | 'Thumbnail-2' | 'Thumbnail-3' | 'Thumbnail-4' | 'Thumbnail-5';
    title: string;
    desc:string;
}

const ItemGame = ({img, title, desc}:ItemGameProps) => {
    return (
        <div className="relative group">
            <Link href='/detail'>
                <div>
                    <div className="h-72 w-52 group-hover:border-opacity-100 border-opacity-0 border-4 border-black rounded-3xl p-2 transition-all duration-300 ease-in-out">
                        <img src={`/img/${img}.png`} className="rounded-3xl h-full w-full" alt=""/>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 left-0 right-0 absolute bottom-5 m-8 transition-all duration-300 ease-in-out cursor-pointer">
                        <div className="relative flex flex-col justify-between h-52 no-underline">
                            <div className="mx-auto my-auto">
                                <img src='/icon/stick.svg' className="w-20 h-16"/>
                            </div>
                            <div>
                                <p className="font-semibold text-white text-xl m-0">
                                    {title}
                                </p>
                                <p className="font-light text-white m-0">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ItemGame