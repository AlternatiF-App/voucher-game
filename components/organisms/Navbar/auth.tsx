import Link from 'next/link'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import {useRouter} from 'next/router'

const Auth = () => {

    const [dropdown, setDropdown] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({
        avatar: ''
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

    const pnLogout = () => {
        Cookies.remove('token')
        setIsLogin(false)
        router.push('/')
    }

    return (
        <>
            {isLogin ? 
            <li className="z-50">
                <div>
                    <a onClick={() => (dropdown === false ? setDropdown(true) : setDropdown(false))}>
                        <img src={`https://voucher-game-server.herokuapp.com/uploads/${user.avatar}`} className="cursor-pointer w-10 h-10 object-cover rounded-full" alt=""/>
                    </a>
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
                            <li onClick={() => pnLogout()} className="px-4 py-2 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                <a>Log Out</a>
                            </li>
                        </ul>
                    }
                </div>
            </li>   
            : <li className="nav-item my-auto">
                <Link href="/sign-in">
                    <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" role="button">
                        Sign In
                    </a>
                </Link>
            </li>
            }
        </>
    )
}

export default Auth