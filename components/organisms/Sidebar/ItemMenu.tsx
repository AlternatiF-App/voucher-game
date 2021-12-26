import Link from 'next/link'

interface ItemMenuProps{
    active?: boolean;
    icon: string;
    title: string;
    link: string;
    onClick?: () => void;
}

const ItemMenu = ({active, icon, title, link, onClick}:ItemMenuProps) => {

    return (
        <div className={`${active && 'active'} h-10 lg:h-full flex items-center space-x-4 relative lg:pb-6 item`}>
            <img src={`/icon/ic-menu-${icon}.svg`}/>
            <p>
                {
                    onClick
                    ? <a onClick={onClick} className="text-lg cursor-pointer">
                        {title}
                    </a> 
                    : <Link href={link}>
                        <a className="text-lg cursor-pointer">
                            {title}
                        </a>
                    </Link>
                }
            </p>
        </div>
    )
}

export default ItemMenu