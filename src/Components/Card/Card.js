import './Card.css';

import {FaStar, FaDownload, FaPlay , FaEye , FaCheckCircle ,FaServer , FaGamepad} from 'react-icons/fa';
import { SecondaryButton } from '..';
const Card = (props) => {
    return (
        <div className="most-popular-item">
            <div className="card-wrapper">
                <img className="most-popular-item-image" src={props.image} alt=""/>
                <div className="most-popular-item-content">
                    <h4 className="most-popular-item-title">
                        {props.title} <br/>
                        <span>{props.category}</span>
                    </h4>
                    <ul>
                        <li><FaStar className='star'/> <span>{props.rate}</span></li>
                        <li><FaDownload className='R'/> <span>{props.download}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
const profileCard = (props) => {
    return (
        <div className="most-popular-item">
            <div className="card-wrapper">
                <div className='vid'>
                    <img className="most-popular-item-image" src={props.image} alt=""/>
                    <a href="/#" className='play'><FaPlay /></a>
                </div>
                <div className="most-popular-item-content">
                    <h4 className="most-popular-item-title">
                        {props.number_Clip}
                    </h4>
                    <ul>
                        <li>
                            <FaEye className='R'/> <span>{props.views}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
const mouseHov= () =>{
    document.querySelectorAll('.game-card').forEach(item =>{
        item.querySelectorAll(".streaming-hov").forEach( hov =>{
            if(hov.classList.contains("streaming-hov")){
                hov.classList.add('hoving-streams');
            } 
        });
    })
}
const mouseLea= () =>{
    document.querySelectorAll('.game-card').forEach(item =>{
        item.querySelectorAll(".streaming-hov").forEach( hov =>{
            if(hov.classList.contains("streaming-hov")){
                hov.classList.remove('hoving-streams');
            }
        });
    })
}

const FeatutredGame = ({props}) => {
    return (
        <div className="most-popular-item" >
            <div className="card-wrapper game-card">
                <img className="most-popular-item-image hov-img" onMouseOver={mouseHov} onMouseLeave={mouseLea} src={props.image} alt=""/>
                <div className="most-popular-item-content str-hov">
                    <h4 className="most-popular-item-title">
                        {props.title} <br/>
                        <span>{props.category}</span>
                    </h4>
                    <ul >
                        <li><FaStar className='star'/> <span>{props.rate}</span></li>
                        <li><FaDownload className='R'/> <span>{props.download}</span></li>
                    </ul>
                </div>
                <div className='streaming-hov R mx-auto p-2'>
                    {props.streams}<span> Streaming</span>
                </div>
            </div>
            
        </div>
    )
}
const liveStreame = (props) => {
    return (
        <div className="most-popular-item">
            <div className="card-wrapper live-card">
                <img className="service-image" src={props.image} alt=""/><br/>
                <div className="most-popular-item-content">
                    <h3 className="live-title pt-4">
                        {props.title} <br/>
                        <span>{props.description} <a href="https://paypal.me/templatemo" className='R'>{props.paypal}</a></span>
                    </h3>
                </div>
            </div>
        </div>
    )
}
const MostPuplarLiveCard = (props) => {
    return (
        <div className="most-popular-item">
            <div className="card-wrapper game-card">
                <img className="most-popular-item-image" src={props.image} alt=""/>
                <div className="most-popular-item-content">
                <img src={props.smallImage} alt="" className='image-avatar me-4'/>
                    <h3 className="most-popular-item-title live-title text-start">
                        <FaCheckCircle className='bg-prima R'/>
                        <span className='R'> {props.Name}</span><br/>
                        {props.title} 
                    </h3>
                </div>
            </div>
        </div>
    )
}
const Feature = (props) => {
    return (
        <div className={`feat py-2 ${props.cls}`}>
            <img className="feat-image" src={props.image} alt=""/>
            <a href="/#" className='play'><FaPlay /></a>
        </div>
    )
}
const FortniteDetails = ({props}) => {
    return (
        <div className="row">
            <div className="details card col-md-6 col-xs-12 p-3">
                <div className="detail card-body d-flex justify-content-between align-items-center">
                    <h4 className="most-popular-item-title">
                        {props.title} <br/>
                        <span> {props.category}</span>
                    </h4>
                    <ul className='lh-lg mb-0'>
                        <li><FaStar className='star'/> <span className='text-white'>{props.rate}</span></li>
                        <li><FaDownload className='R'/> <span className='text-white'>{props.download}</span></li>
                    </ul>
                </div>
            </div>
            <div className="details card col-md-6 col-xs-12 p-3">
                <div className="detail card-body">
                    <ul className="card-body d-flex justify-content-between mb-0">
                        <li className='lh-lg text-center'><FaStar className='star'/> <br/> <span className='text-white'>{props.rate}</span></li>
                        <li className='lh-lg text-center'><FaDownload className='R'/><br/> <span className='text-white'>{props.download}</span></li>
                        <li className='lh-lg text-center'><FaServer className="R"/><br/> <span className='text-white'>{props.storage}</span></li>
                        <li className='lh-lg text-center'><FaGamepad className='R w-100 '/><br/> <span className='text-white'>{props.type_Game}</span></li>
                    </ul>
                </div>
            </div>
            <div className="details col-xs-12">
                <ul className="row d-flex justify-content-between p-0">
                    <li className='col-md-4 col-xs-12 p-3'><img className='detail' src={props.image_1} alt=''/></li>
                    <li className='col-md-4 col-xs-12 p-3'><img className='detail' src={props.image_2} alt=''/></li>
                    <li className='col-md-4 col-xs-12 p-3'><img className='detail' src={props.image_3} alt=''/></li>
                </ul>
            </div>
            <div className='col-xs-12'>
                <SecondaryButton link="/#" cls="w-100 d-flex justify-content-center">Download {props.title} Now!</SecondaryButton>
            </div>
        </div>
    )
}
export default Card
export {profileCard ,FeatutredGame ,liveStreame , MostPuplarLiveCard, Feature , FortniteDetails}