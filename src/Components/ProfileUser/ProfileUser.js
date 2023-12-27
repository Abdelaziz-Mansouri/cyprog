import './ProfileUser.css';
import { PrimaryButton, SecondaryButton } from '../../Components/index';


const ProfileUser = (props) => {
    return (
        <div className='inf row'>
            <div className='col-lg-4 col-md-6 col-xs-12 infos'><img src={props.image} alt='' className='user-image'/></div>
            <div className='info col-lg-4 col-md-6 col-xs-12 infos row'>
                <PrimaryButton link="/#" className='col-12'>Offline</PrimaryButton>
                <h3 className='col-12'>{props.fullName}</h3>
                <p className='col-12'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                <SecondaryButton className='col-12' link='/#'>Start Live Stream</SecondaryButton>
            </div>
            <div className='col-lg-4 col-md-12 col-xs-12 infos row'>
                <ul className='info-download'>
                    <li className='d-flex col-12'><span>Games Downloaded</span> <span className='numbers'>{props.games_Download}</span></li>
                    <li className='d-flex col-12'><span>Friends Online</span> <span className='numbers'>{props.friends_Online}</span></li>
                    <li className='d-flex col-12'><span>Live Streams</span> <span className='numbers'>{props.live_Stream}</span></li>
                    <li className='d-flex col-12'><span>Clips</span> <span className='numbers'>{props.clips}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileUser