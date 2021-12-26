import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/Transactions';
import FeaturedGames from '../components/organisms/FeaturedGames';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';
import Head from 'next/head'

const Home = () => {

  return (
    <>
        <Head>
          <title>VoucherGame - Get your Best Experience in Play Game</title>
          <meta name="description" content="Kami menyediakan banyak voucher game untuk kalian claim atau redeem"/>
          <meta property="og:title" content='VoucherGame - Get your Best Experience in Play Game'/>
          <meta property="og:description" content='Kami menyediakan banyak voucher game untuk kalian claim atau redeem'/>
          <meta property="og:image" content='https://voucher-game-server.herokuapp.com/uploads/93cda5540cc38009eb46bc0b8b860380.png'/>
          <meta property="og:url" content='https://voucher-game.herokuapp.com/'/>
        </Head>
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
