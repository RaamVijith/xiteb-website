import '../assets/styles/pages/HomePage.css'
import Welcome from '../components/homePageComponents/Welcome'
import Section2_details from '../components/homePageComponents/Section2_details'
import About from '../components/homePageComponents/About'
import Services from '../components/homePageComponents/Services'
import CustomerReview from '../components/homePageComponents/CustomerReview'
import SayHello from '../components/homePageComponents/SayHello'
import Footer from '../components/homePageComponents/Footer'
import FooterBorder from '../components/homePageComponents/FooterBorder'

const HomePage = () => {
  return (
    <div className='homePage' >
      <Welcome/>
      <Section2_details/>
      <About/>
      <Services/>
      <CustomerReview />
      <SayHello/>
      <Footer/>
      <FooterBorder/>
    </div>
  )
}

export default HomePage