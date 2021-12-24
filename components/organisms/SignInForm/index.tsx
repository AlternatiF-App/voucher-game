import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setLogin } from '../../../services/auth';
import { useRouter } from 'next/router';

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
                router.push('/')
            }
        }
    }

    return (
        <>
            <h2 className="text-4xl font-bold text-blue-800 mb-2">
                Sign In
            </h2>
            <p className="text-lg text-blue-800 m-0">
                Masuk untuk melakukan proses top up
            </p>
            <div className="pt-14">
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
            <div className="pt-8">
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
            <div className="flex flex-col items-center mx-auto pt-14">
                <button className="w-1/2 text-center px-8 py-2 font-medium text-lg bg-blue-600 text-white rounded-full mb-4"
                    type="button"
                    onClick={onSubmit}>
                    Continue to Sign In
                </button>
                <Link href="/sign-up">
                <button className="w-1/2 text-center px-8 py-2 font-medium text-lg text-blue-600 text-gray-200 rounded-full mb-4">
                    Sign Up
                </button>
                </Link>
            </div>
            <ToastContainer/>
        </>
    )
}

export default SignInForm