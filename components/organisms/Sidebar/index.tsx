import FooterSidebar from './FooterSidebar'
import Profile from './Profile'
import ItemMenu from './ItemMenu'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

interface SidebarProps{
    activeMenu: string;
}

const Sidebar = ({activeMenu}:SidebarProps) => {

    const router = useRouter()

    const pnLogout = () => {
        Cookies.remove('token')
        router.push('/sign-in')
    }

    return (
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
    )
}

export default Sidebar