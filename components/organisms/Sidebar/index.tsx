import FooterSidebar from './FooterSidebar'
import Profile from './Profile'
import ItemMenu from './ItemMenu'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { MenuIcon } from '@heroicons/react/outline'

interface SidebarProps{
    activeMenu: string;
}

const Sidebar = ({activeMenu}:SidebarProps) => {

    const router = useRouter()
    const [menu, setMenu] = useState(false)

    const pnLogout = () => {
        Cookies.remove('token')
        router.push('/sign-in')
    }

    return (
        <>
        <section className="w-1/4 hidden lg:block">
            <div className="relative h-screen overflow-y-auto hide-scroll-bar pt-14 pb-8 px-8">
                <Profile/>
                <div className="menus">
                    <ItemMenu icon={'overview'} title={'Overview'} link={'/member'} active={activeMenu === 'overview'}/>
                    <ItemMenu icon={'transactions'} title={'Transactions'} link={'/member/transactions'} active={activeMenu === 'transactions'}/>
                    <ItemMenu icon={'messages'} title={'Messages'} link={'/member'}/>
                    <ItemMenu icon={'card'} title={'Card'} link={'/member'}/>
                    <ItemMenu icon={'rewards'} title={'Rewards'} link={'/member'}/>
                    <ItemMenu icon={'settings'} title={'Settings'} link={'/member/edit-profile'} active={activeMenu === 'edit-profile'}/>
                    <ItemMenu icon={'logout'} title={'Log Out'} link={'/'} onClick={() => pnLogout()}/>
                </div>
                <FooterSidebar/>
            </div>
        </section>
        <section className="block lg:hidden px-4 py-2 bg-white flex justify-end">
            <MenuIcon 
                onClick={() => setMenu(true)}
                className="visible lg:hidden h-10 w-10" 
                fill="none"
                stroke="currentColor"
            />
             {
                menu && <div className="relative z-50 transition duration-150 ease-out" onClick={() => setMenu(false)}>
                    <div className="fixed inset-0 bg-gray-800 opacity-25 transition duration-150 ease-in"></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm p-6 bg-white border-r overflow-y-auto ">
                        <Profile/>
                        <div className="menus">
                            <ItemMenu icon={'overview'} title={'Overview'} link={'/member'} active={activeMenu === 'overview'}/>
                            <ItemMenu icon={'transactions'} title={'Transactions'} link={'/member/transactions'} active={activeMenu === 'transactions'}/>
                            <ItemMenu icon={'messages'} title={'Messages'} link={'/member'}/>
                            <ItemMenu icon={'card'} title={'Card'} link={'/member'}/>
                            <ItemMenu icon={'rewards'} title={'Rewards'} link={'/member'}/>
                            <ItemMenu icon={'settings'} title={'Settings'} link={'/member/edit-profile'} active={activeMenu === 'edit-profile'}/>
                            <ItemMenu icon={'logout'} title={'Log Out'} link={'/'} onClick={() => pnLogout()}/>
                        </div>
                    </nav>
                </div>
             }
        </section>
        </>
    )
}

export default Sidebar