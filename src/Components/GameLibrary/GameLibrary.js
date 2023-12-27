import './GameLibrary.css';
import {FaStar, FaDownload, FaCheckCircle} from 'react-icons/fa';
import { PrimaryButton, SecondaryButton } from '../index';

const GameLibrary = (props) => {
    return (
        <div className="library-item row">
            <ul className="game-wrapper d-flex row">
                <li className='col-lg-2 col-md-3 col-sm-6 col-xs-12'>                
                    <img className="library-item-image" src={props.image} alt=""/>
                </li>
                <li className='col-lg-2 col-md-3 col-sm-6 col-xs-12'>                
                    <h4 className="library-item-title">
                        {props.title}<br/>
                        <span>{props.category}</span>
                    </h4>
                </li>
                <li className='col-lg-2 col-md-4 col-sm-6 col-xs-12'>
                    <h4 className="library-item-title">
                        Date Added<br/>
                        <span>{props.date_Added}</span>
                    </h4>
                </li>
                <li className='col-lg-2 col-md-3 col-sm-6 col-xs-12'>
                    <h4 className="library-item-title">
                        Hours Played<br/>
                        <span>{props.Hours_Played}</span>
                    </h4>
                </li>
                <li className='col-lg-2 col-md-3 col-sm-6 col-xs-12'>
                    <h4 className="library-item-title">
                        Currently<br/>
                        <span>{props.currently}</span>
                    </h4>
                </li>
                <li className='col-lg-2 col-md-3 col-sm-6 col-xs-12'>
                    <button className={props.currently==="Download" ? "btn library-btn-download" : "btn library-btn-downloaded"}>{props.currently}</button>
                </li>
            </ul>
        </div>
    )
}
const topDownloads = ({props}) => {
    return (
        <div className="library-item row">
            <ul className="top-down game-wrapper d-flex row">
                <li className='col-4'>                
                    <img className="library-item-image" src={props.image} alt=""/>
                </li>
                <li className='col-4'>                
                    <h4 className="library-item-title">
                        {props.title}<br/>
                        <span>{props.category}</span><br/>
                        <span className='text-white pe-3'><FaStar className='star'/> {props.rat}</span>
                        <span className='text-white'><FaDownload className='R'/> {props.dow}</span>
                    </h4>
                </li>
                <li className='col-4 pe-0'>
                    <SecondaryButton link='/#'>
                        <FaDownload className='R'/>
                    </SecondaryButton>
                </li>
            </ul>
        </div>
    )
}
const topStreams = ({props}) => {
    return (
        <div className="library-item row justify-content-center">
            <ul className="top-down game-wrapper d-flex row align-items-center top-str mb-0">
                <li className='col-3 text-white'> 
                    <span>{props.id} </span>              
                    <img className="service-image" src={props.smallImage} alt=""/>
                </li>
                <li className='col-5 R d-flex text-start justify-content-around'> 
                    <FaCheckCircle className='bg-prima'/>
                    <span className='R'> {props.Name}</span>
                    
                </li>
                <li className='col-4 pe-0'>
                    <PrimaryButton link="/#"> Follow
                    </PrimaryButton>
                </li>
            </ul>
        </div>
    )
}
const AllGames = ({props}) => {
    return (
        <div className="col-md-6 col-xs-12">
            <ul className="game-wrapper d-flex justify-content-between mb-0">
                <li className=''>                
                    <img className="library-item-image" src={props.image} alt=""/>
                </li>
                <li className=''>
                    <h4 className="library-item-title text-white">
                        {props.title}<br/>
                        <span>{props.category}</span>
                    </h4>
                </li>
                <li className='p-0'>                
                    <ul className='mb-0'>
                        <li><FaStar className='star'/> <span className='text-white ps-2'>{props.rat}</span></li>
                        <li><FaDownload className='R'/> <span className='text-white ps-2'>{props.dow}</span></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default GameLibrary
export {topDownloads , topStreams , AllGames};