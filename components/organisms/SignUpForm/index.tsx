import { useState } from 'react';
import Link from 'next/link'
import router from 'next/router';

const SignUpForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        const userForm = {
            name,
            email,
            password
        }
        localStorage.setItem('user-form', JSON.stringify(userForm))
        router.push('/sign-up-photo')
    }

    return (
        <>
            <h2 className="text-xl lg:text-4xl font-bold text-blue-800 mb-1 lg:mb-4">
                Sign Up
            </h2>
            <p className="text-base lg:text-lg text-blue-800 m-0">
                Daftar dan bergabung dengan kami
            </p>
            <div className="pt-6 lg:pt-14">
                <p className="form-label text-lg font-medium text-blue-600 mb-2 lg:mb-10">
                    Full Name
                </p>
                <input className="w-full px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg"
                    type="text" 
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e:any) => setName(e.target.value)}
                />
            </div>
            <div className="pt-2 lg:pt-8">
                <p className="form-label text-lg font-medium text-blue-600 mb-2 lg:mb-10">
                    Email Address
                </p>
                <input className="w-full px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e:any) => setEmail(e.target.value)}
                />
            </div>
            <div className="pt-2 lg:pt-8">
                <p className="form-label text-lg font-medium text-blue-600 mb-2 lg:mb-10">
                    Password
                </p>
                <input className="w-full px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg"
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e:any) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex flex-col mx-auto pt-14">
                <button className="px-8 py-2 font-medium text-lg bg-blue-600 text-white rounded-full mb-4"
                    type="button"
                    onClick={onSubmit}>
                    Continue
                </button>
                <Link href='/sign-in'>
                    <button className="px-8 py-2 font-medium text-lg bg-gray-200 text-blue-600 rounded-full">
                        Sign In
                    </button>
                </Link>
            </div>
        </>
    )
}

export default SignUpForm