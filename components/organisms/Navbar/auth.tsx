import Link from 'next/link'
import {useState} from 'react'

interface AuthProps{
    isLogin?: boolean
}

const Auth = ({isLogin}:AuthProps) => {

    const [dropdown, setDropdown] = useState(false)

    return (
        <>
            {isLogin ? 
            <li className="">
                <div>
                    <a onClick={() => (dropdown === false ? setDropdown(true) : setDropdown(false))}>
                        <img src="/img/avatar-1.png" className="cursor-pointer rounded-full" width="40" height="40" alt=""/>
                    </a>
                    {
                        dropdown && <ul className="bg-white absolute w-48 -ml-6 mt-4 py-2 rounded-md text-lg">
                            <li className="px-4 py-2 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                <Link href="/member"><a>My Profile</a></Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                <Link href="/"><a>Wallet</a></Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                <Link href="/member/edit-profile"><a>Account Settings</a></Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-blue-100 hover:text-blue-400 text-blue-200 cursor-pointer">
                                <Link href="/sign-in"><a>Log Out</a></Link>
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