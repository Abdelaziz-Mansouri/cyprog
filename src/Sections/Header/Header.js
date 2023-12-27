import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../../Components/assets/Images/logo.png';
import profile from '../../Components/assets/Images/profile-header.jpg';
import {NavItem ,NavItemDrop} from '../../Components/index';

const Header= ()=>{
    return(
        <>
            <div className="navbar navbar-expand-md  navbar-dark cyborg-navbar">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainmenu">
                        <ul className="navbar-nav ms-auto">
                            <NavItem>
                                <Link to='/' className="nav-link">Home</Link>
                            </NavItem>
                            <NavItem><Link to="/Browse" className="nav-link">Browse</Link></NavItem>
                            <NavItemDrop>
                                <Link to="/Details" className="nav-link">Details</Link>
                            </NavItemDrop>
                            <NavItem><Link to="/Streams" className="nav-link">Streams</Link></NavItem>
                            <NavItem>
                                <Link to='/Profile' className="nav-link profile">Profile <img src={profile} height="30px" className='img-prof' alt=""/></Link>
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;