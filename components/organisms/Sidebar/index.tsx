import FooterSidebar from './FooterSidebar'
import Profile from './Profile'
import ItemMenu from './ItemMenu'

interface SidebarProps{
    activeMenu: string;
}

const Sidebar = ({activeMenu}:SidebarProps) => {
    return (
        <section className="w-1/4">
            <div className="relative h-screen overflow-y-auto hide-scroll-bar pt-14 pb-8 px-8">
                <Profile/>
                <div className="menus">
                    <ItemMenu icon={'overview'} title={'Overview'} link={'/member'} active={activeMenu === 'overview'}/>
                    <ItemMenu icon={'transactions'} title={'Transactions'} link={'/member/transactions'} active={activeMenu === 'transactions'}/>
                    <ItemMenu icon={'messages'} title={'Messages'} link={'/member'}/>
                    <ItemMenu icon={'card'} title={'Card'} link={'/member'}/>
                    <ItemMenu icon={'rewards'} title={'Rewards'} link={'/member'}/>
                    <ItemMenu icon={'settings'} title={'Settings'} link={'/member/edit-profile'} active={activeMenu === 'edit-profile'}/>
                    <ItemMenu icon={'logout'} title={'Log Out'} link={'/member'}/>
                </div>
                <FooterSidebar/>
            </div>
        </section>
    )
}

export default Sidebar