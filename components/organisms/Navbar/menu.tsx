import cx from 'classnames'
import Link from 'next/link'

interface MenuProps{
    title: string;
    href: string;
    active?: boolean;
}

const Menu = ({title, href = '/', active}:MenuProps) => {

    const classTitle = cx({
        "nav-link":true,
        active
    })

    return (
        <li className="nav-item my-auto">
            <Link href={href}>
                <a className={classTitle} aria-current="page">{title}</a>
            </Link>
        </li>
    )
}

export default Menu