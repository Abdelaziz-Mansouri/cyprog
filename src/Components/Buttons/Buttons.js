import {Link} from 'react-router-dom';
import './Buttons.css'

const primaryButton = (props) => {
    return (
        <div className='button primary-btn'>
            <Link to={props.link}>{props.children}</Link>
        </div>
    )
}
const secondaryButton = (props) => {
    return (
        <div className={`button secondary-btn`}>
            <Link className={`${props.cls}`} to={props.link}>{props.children}</Link>
        </div>
    )
}

export default primaryButton;
export {secondaryButton}