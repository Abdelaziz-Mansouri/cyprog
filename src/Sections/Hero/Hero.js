import { PrimaryButton } from '../../Components';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-main">
            <div className='hero-text'>
                <h6 className='hero-subtitle'>Welcome To Cybrog</h6>
                <h4 className='hero-title'><em>Browse</em> Our Popular Games Here</h4>

                <PrimaryButton link="/Browse">Browse Now</PrimaryButton>

                {/* <div className='main-button'>
                    <a href='Browse.html'>Browse Now</a>
                </div> */}
            </div>
        </div>
    )
}

export default Hero