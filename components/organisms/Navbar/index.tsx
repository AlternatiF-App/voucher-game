import Image from 'next/image'
import Menu from './menu'
import Auth from './auth'

const Navbar = () => {
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image src="/icon/logo.svg" width={60} height={60}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                            <Menu title={"Home"} href="/" active/>
                            <Menu title={"Games"} href="/games"/>
                            <Menu title={"Rewards"} href="/"/>
                            <Menu title={"Discover"} href="/"/>
                            <Menu title={"Global Rank"} href="/"/>
                            <Auth isLogin/>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar