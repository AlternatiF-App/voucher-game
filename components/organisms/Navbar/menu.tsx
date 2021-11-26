import Link from 'next/link'

interface MenuProps{
    title: string;
    href: string;
    active?: boolean;
}

const Menu = ({title, href = '/', active}:MenuProps) => {

    return (
        <li className="my-auto">
            <Link href={href}>
                <a className={`${active ? 'text-blue-400' : 'text-blue-200'}`} aria-current="page">{title}</a>
            </Link>
        </li>
    )
}

export default Menu