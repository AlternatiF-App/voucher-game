import Link from 'next/link'

const SignUpForm = () => {
    return (
        <>
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
                Sign Up
            </h2>
            <p className="text-lg text-blue-800 m-0">
                Daftar dan bergabung dengan kami
            </p>
            <div className="pt-14">
                <p className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Full Name
                </p>
                <input className="w-full px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg"
                    type="text" id="name" name="name" placeholder="Enter your name"/>
            </div>
            <div className="pt-8">
                <p className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Email Address
                </p>
                <input className="w-full px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg"
                    type="email" id="email" name="email" placeholder="Enter your email address"/>
            </div>
            <div className="pt-30">
                <p className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Password
                </p>
                <input className="w-full px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg"
                    type="password" id="password" name="password" placeholder="Your password"/>
            </div>
            <div className="flex flex-col mx-auto pt-14">
                <Link href='/sign-up-photo'>
                <button className="px-8 py-2 font-medium text-lg bg-blue-600 text-white rounded-full mb-4">
                    Continue
                </button>
                </Link>
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