import Link from 'next/link'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import {useRouter} from 'next/router'

const Auth = () => {

    const [dropdown, setDropdown] = useState(false)
    const [dropdownMobile, setDropdownMobile] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({
        avatar: '',
        name: '',
    })
    const router = useRouter()

    useEffect(() => {
        const token = Cookies.get('token')
        if(token){
            const jwt_token = atob(token)
            const payload:any = jwt_decode(jwt_token)
            const userPayload = payload.player
            setIsLogin(true)
            setUser(userPayload)
        }
    }, [])

    const onLogout = () => {
        Cookies.remove('token')
        setIsLogin(false)
        router.push('/')
    }

    return (
        <>
            {isLogin ? 
            <li className="z-50 px-2 py-1 lg:px-0 lg:py-0">
                <div>
                    <a onClick={() => (dropdown === false ? setDropdown(true) : setDropdown(false))}>
                        <img src={`https://voucher-game-server.herokuapp.com/uploads/${user.avatar}`} className="hidden lg:block cursor-pointer w-10 h-10 object-cover rounded-full" alt=""/>
                    </a>
                    <div className="block lg:hidden">
                        <ul>
                            <li onClick={() => (dropdownMobile === false ? setDropdownMobile(true) : setDropdownMobile(false))}
                                className="font-bold text-blue-200 flex">
                                <div className="pr-2 flex items-center">
                                    <img src={`https://voucher-game-server.herokuapp.com/uploads/${user.avatar}`} className="w-8 h-8 object-cover rounded-full" alt=""/>
                                </div>
                                {user.name}
                            </li>
                            {
                                dropdownMobile && <>
                                    <li className="pl-4 py-1 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                        <Link href="/member"><a>My Profile</a></Link>
                                    </li>
                                    <li className="pl-4 py-1 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                        <Link href="/"><a>Wallet</a></Link>
                                    </li>
                                    <li className="pl-4 py-1 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                        <Link href="/member/edit-profile"><a>Account Settings</a></Link>
                                    </li>
                                    <li onClick={() => onLogout()} className="pl-4 py-1 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                        <a>Log Out</a>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                    {
                        dropdown && <ul className="bg-white absolute w-48 -ml-36 mt-4 py-2 rounded-md text-lg">
                            <li className="px-4 py-2 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                <Link href="/member"><a>My Profile</a></Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                <Link href="/"><a>Wallet</a></Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                <Link href="/member/edit-profile"><a>Account Settings</a></Link>
                            </li>
                            <li onClick={() => onLogout()} className="px-4 py-2 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                <a>Log Out</a>
                            </li>
                        </ul>
                    }
                </div>
            </li>   
            : <li className="px-4 py-2">
                <Link href="/sign-in">
                    <a className="px-4 py-2 flex justify-center rounded-full" role="button">
                        Sign In
                    </a>
                </Link>
            </li>
            }
        </>
    )
}

export default Auth