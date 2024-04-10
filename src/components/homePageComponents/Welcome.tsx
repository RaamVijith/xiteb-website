import '../../assets/styles/components/homePageComponents/Welcome.css'
import welcome from '../../assets/welcome.png';

const Welcome = () => {
  return (
    <section className='welcome'>
        <div className='welcome-left'>
            <h1>We Design and Develop</h1>
                <h2></h2>
                <p></p>
          
        </div>
        <div className='welcome-right'>
            <img src={welcome} alt='welcome pic'/>
        </div>
        
    </section >
  )
}

export default Welcome