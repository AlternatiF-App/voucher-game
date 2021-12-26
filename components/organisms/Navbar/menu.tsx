import Link from 'next/link'

interface MenuProps{
    title: string;
    href: string;
    active?: boolean;
}

const Menu = ({title, href = '/', active}:MenuProps) => {

    return (
        <li className="my-auto px-2 py-1 lg:px-0 lg:py-0 hover:bg-blue-100">
            <Link href={href}>
                <a className={`${active ? 'text-blue-400' : 'text-blue-200'}`} aria-current="page">{title}</a>
            </Link>
        </li>
    )
}

export default Menu