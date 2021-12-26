import Image from 'next/image'
import SignUpForm from '../components/organisms/SignUpForm'

const SignUp = () => {
    return (
        <section className="lg:w-1/4 lg:container lg:mx-auto lg:py-24 pt-8 pb-10">
            <div className="">
                <form action="">
                    <div className="pb-14">
                        <a className="navbar-brand" href="">
                            <Image src="/icon/logo.svg" width={60} height={60}/>
                        </a>
                    </div>
                    <SignUpForm/>
                </form>
            </div>
        </section>   
    )
}

export default SignUp