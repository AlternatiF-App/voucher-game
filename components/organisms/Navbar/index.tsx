import Image from 'next/image'
import Menu from './menu'
import Auth from './auth'
import {MenuIcon} from '@heroicons/react/outline'

const Navbar = () => {
    return (
        <div className="w-full lg:w-11/12 lg:mx-auto px-4 py-10 bg-white">
            <div>
                <div className="flex justify-between items-center">
                    <div>
                        <Image src="/icon/logo.svg" width={60} height={60}/>
                    </div>
                    <MenuIcon className="visible lg:hidden h-10 w-10" fill="none" stroke="currentColor"/>
                    <div className="hidden lg:block">
                        <ul className="flex space-x-10">
                            <Menu title={"Home"} href="/" active/>
                            <Menu title={"Games"} href="/games"/>
                            <Menu title={"Rewards"} href="/"/>
                            <Menu title={"Discover"} href="/"/>
                            <Menu title={"Global Rank"} href="/"/>
                            <Auth isLogin/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar