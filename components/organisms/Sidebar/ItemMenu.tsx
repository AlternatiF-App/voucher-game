import cx from 'classnames'
import Link from 'next/link'

interface ItemMenuProps{
    active?: boolean;
    icon: string;
    title: string;
    link: string;
}

const ItemMenu = ({active, icon, title, link}:ItemMenuProps) => {

    const classTitle = cx({
        'item':true,
        'mb-30':true,
        active
    })

    return (
        <div className={classTitle}>
            <img src={`/icon/ic-menu-${icon}.svg`} className="icon me-3"/>
            <p className="item-title m-0">
                <Link href={link}>
                    <a className="text-lg text-decoration-none">
                        {title}
                    </a>
                </Link>
            </p>
        </div>
    )
}

export default ItemMenu