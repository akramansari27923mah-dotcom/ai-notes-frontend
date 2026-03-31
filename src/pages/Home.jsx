import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import KeyFeatures from '../components/KeyFeatures'
import Work from '../components/Work'
import PerfectFor from '../components/PerfectFor'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'
import Action from '../components/Action'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <KeyFeatures />
      <Work />
      <Action />
      <PerfectFor />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default Home