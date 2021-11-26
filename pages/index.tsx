import {useEffect} from 'react'
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/Transactions';
import FeaturedGames from '../components/organisms/FeaturedGames';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';
// import AOS from 'aos'

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
        <Navbar/>
        <MainBanner/>
        <TransactionStep/>
        <FeaturedGames/>
        <Reached/>
        <Story/>
        <Footer/>
      </>
  );
}

export default Home
