import Image from 'next/image'
import Link from 'next/link'
import SignInForm from '../components/organisms/SignInForm'

const SignIn = () => {

    return (
        <>
            <section>
                <div className="lg:flex block">
                    <div className="lg:w-1/2 w-full my-auto lg:px-20 lg:py-14 pt-8 pb-12 px-4">
                        <form action="">
                            <div className="lg:container lg:mx-auto">
                                <div className="pb-8 lg:pb-14">
                                    <Link href='/'>
                                        <Image src="/icon/logo.svg" width={60} height={60}/>
                                    </Link>
                                </div>
                                <SignInForm/>
                            </div>
                        </form>
                    </div>
                    <div className="hidden lg:block w-1/2 px-20 bg-blue-900 text-center lg:py-36">
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