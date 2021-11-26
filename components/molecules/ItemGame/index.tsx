import Image from 'next/image'
import Link from 'next/link'

interface ItemGameProps{
    img: 'Thumbnail-1' | 'Thumbnail-2' | 'Thumbnail-3' | 'Thumbnail-4' | 'Thumbnail-5';
    title: string;
    desc:string;
}

const ItemGame = ({img, title, desc}:ItemGameProps) => {
    return (
        <div className="featured-game-card position-relative">
            <Link href='/detail'>
                <a>
                    <div className="blur-sharp">
                        <img src={`/img/${img}.png`} width="205" height="270" alt=""/>
                    </div>
                    <div className="cover position-absolute bottom-0 m-32">
                        <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                            <div className="game-icon mx-auto">
                                <Image src='/icon/stick.svg' width={24} height={22}/>
                            </div>
                            <div>
                                <p className="fw-semibold text-white text-xl m-0">
                                    {title}
                                </p>
                                <p className="fw-light text-white m-0">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default ItemGame