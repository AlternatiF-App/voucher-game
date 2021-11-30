import Image from 'next/image'
import Link from 'next/link'
import SignInForm from '../components/organisms/SignInForm'

const SignIn = () => {
    return (
        <>
            <section>
                <div className="flex">
                    <div className="w-1/2 my-auto px-20 lg:py-14 pt-8 pb-12 px-0">
                        <form action="">
                            <div className="container mx-auto">
                                <div className="pb-14">
                                    <Link href='/'>
                                        <Image src="/icon/logo.svg" width={60} height={60}/>
                                    </Link>
                                </div>
                                <SignInForm/>
                            </div>
                        </form>
                    </div>
                    <div className="hidden md:block w-1/2 px-20 bg-blue-900 text-center lg:py-36">
                        <img src="/img/Header-9.png" width="502" height="391.21" className="pb-14" alt=""/>
                        <h2 className="text-4xl font-bold text-white mb-8">
                            Win the battle.<br/> Be the Champion.</h2>
                        <p className="text-white m-0">
                            Kami menyediakan jutaan cara untuk<br/> membantu players menjadi<br/>pemenang sejati
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn