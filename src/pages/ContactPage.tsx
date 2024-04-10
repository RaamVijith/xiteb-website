import '../assets/styles/pages/ContactPage.css'
import SayHello from '../components/homePageComponents/SayHello'
import Footer from '../components/homePageComponents/Footer'

const ContactPage = () => {
  return (
    <div className='contactPage'>
      <section className='section1'>
        <img alt='contact' src='https://cdn-lfcpl.nitrocdn.com/qrIyUeHSNDIqaydCtPMRQNGXljIEdFtW/assets/images/optimized/rev-9221f6f/xiteb.com/img/contact/01.jpg'/>
        <div className='texts'> 
        <h1>Contact Us</h1>
        <h2>Just Say Hello</h2>
        </div>
      </section>
      <SayHello/>
      <Footer/>
    </div>
  )
}

export default ContactPage