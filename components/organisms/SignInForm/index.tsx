import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { setLogin } from '../../../services/auth';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'

const SignInForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const onSubmit = async () => {
        const data = {
            email,
            password
        }
        if(!email || !password) {
            toast.error('Email and Password must be filled!')
        }else{
            const res = await setLogin(data)
            if(res.error){
                toast.error(res.message)
            }else{
                toast.success('Login Successfully')
                const { token } = res.data;
                const tokenBase64 = btoa(token);
                Cookies.set('token', tokenBase64, { expires: 1 })
                router.push('/')
            }
        }
    }

    return (
        <>
            <h2 className="text-xl lg:text-4xl font-bold text-blue-800 mb-2">
                Sign In
            </h2>
            <p className="text-base lg:text-lg text-blue-800 m-0">
                Masuk untuk melakukan proses top up
            </p>
            <div className="pt-6 lg:pt-14">
                <p className="text-lg font-medium text-blue-800 mb-2">
                    Email Address
                </p>
                <input className="w-full px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e:any) => setEmail(e.target.value)}
                />
            </div>
            <div className="pt-6 lg:pt-14">
                <p className="text-lg font-medium text-blue-800 mb-2">
                    Password
                </p>
                <input className="w-full px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e:any) => setPassword(e.target.value)}
                />
            </div>
            <div className="lg:flex items-center lg:mx-auto pt-14">
                <button className="w-full lg:w-1/2 text-center px-8 py-2 font-medium text-lg bg-blue-600 text-white rounded-full mb-4"
                    type="button"
                    onClick={onSubmit}>
                    Continue to Sign In
                </button>
                <Link href="/sign-up">
                    <button className="w-full lg:w-1/2 mt-4 lg:mt-0 text-center px-8 py-2 font-medium text-lg text-blue-600 text-gray-200 rounded-full mb-4">
                        Sign Up
                    </button>
                </Link>
            </div>
        </>
    )
}

export default SignInForm