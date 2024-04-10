import '../assets/styles/components/More.css'
import { ImFacebook2 } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsSkype } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const More = () => {

  return (
    <div className="more">
        <div className='more-left'>
        <ul className="more-left-list">
          <li >
            <a  href="#home">Home</a>
          </li>
          <li >
            <a  href="#home">About</a>
          </li>
          <li >
            <a  href="#home">Website</a>
          </li>
          <li >
            <a  href="#home">eCommerce</a>
          </li>
          <li >
            <a  href="#home">Mobile Apps</a>
          </li>
          <li >
            <a  href="#home">Software</a>
          </li>
          <li >
            <a  href="#home">SEO & SEM</a>
          </li>
          <li >
            <a  href="#home">Games</a>
          </li>
        </ul>
        </div>
        <div className='more-right'>
            <h5>Just Say Hello</h5>
            <p>Feel free to ask ask any questions related to our activities. We will be happy to answer you.</p>
            <h5>hello@xiteb.com</h5>
            <h5>+94 11 434 7575</h5>
            <h5>+94 72 799 7711</h5>
            <div className='icons-group'>
            <ImFacebook2 className='icons'/>
            <IoLogoLinkedin className='icons' />
            <BsSkype className='icons'/>
            <FaInstagramSquare className='icons'/>
            <FaYoutube className='icons'/>
            <FaSquareWhatsapp className='icons'/>
            </div>
        </div>
    </div>
  )
}

export default More