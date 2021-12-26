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
        <div className={`${active && 'active'} h-full flex items-center space-x-4 relative pb-6 item`}>
            <img src={`/icon/ic-menu-${icon}.svg`}/>
            <p className="m-0">
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