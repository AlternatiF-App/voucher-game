import Link from 'next/link'

interface ItemMenuProps{
    active?: boolean;
    icon: string;
    title: string;
    link: string;
}

const ItemMenu = ({active, icon, title, link}:ItemMenuProps) => {

    return (
        <div className={`${active && 'active'} h-full flex items-center space-x-4 relative pb-6 item`}>
            <img src={`/icon/ic-menu-${icon}.svg`}/>
            <p className="m-0">
                <Link href={link}>
                    <a className="text-lg">
                        {title}
                    </a>
                </Link>
            </p>
        </div>
    )
}

export default ItemMenu