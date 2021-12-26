import Image from 'next/image'
import Menu from './menu'
import Auth from './auth'
import {MenuIcon} from '@heroicons/react/outline'
import { useState } from 'react'

const Navbar = () => {

    const [menuItem, setMenuItem] = useState(false)

    return (
        <div className="w-full lg:w-11/12 lg:mx-auto px-4 py-10 bg-white">
            <div>
                <div className="flex justify-between items-center">
                    <div>
                        <Image src="/icon/logo.svg" width={60} height={60}/>
                    </div>
                    <MenuIcon 
                        onClick={() => menuItem ? setMenuItem(false) : setMenuItem(true)}
                        className="visible lg:hidden h-10 w-10" 
                        fill="none"
                        stroke="currentColor"
                    />
                    <div className="hidden lg:block">
                        <ul className="flex space-x-10">
                            <Menu title={"Home"} href="/" active/>
                            <Menu title={"Games"} href="/games"/>
                            <Menu title={"Rewards"} href="/"/>
                            <Menu title={"Discover"} href="/"/>
                            <Menu title={"Global Rank"} href="/"/>
                            <Auth/>
                        </ul>
                    </div>
                </div>
            </div>
            { menuItem &&
            <div className="relative w-1/2 pt-1 pb-2 float-right rounded-lg">
                <ul className="absolute bg-white z-50">
                    <Menu title={"Home"} href="/" active/>
                    <Menu title={"Games"} href="/games"/>
                    <Menu title={"Rewards"} href="/"/>
                    <Menu title={"Discover"} href="/"/>
                    <Menu title={"Global Rank"} href="/"/>
                    <Auth/>
                </ul>
            </div>
            }
        </div>
    )
}

export default Navbar