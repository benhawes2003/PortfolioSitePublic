/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Header = ({ toggleHamburger }) => {
    return <>
        <div className="site-header">
            <div className="grid-container site-header__inner">
                <Link className="main-link" to="/">Ben&apos;s Portfolio</Link>

                <div className="nav-links">
                    <Link to="/my-work" className="show-for-large">My Work</Link>
                    <Link to="/about" className="show-for-large">About Me</Link>
                    <Link to="/why" className="show-for-large">Why is this website so fast?</Link>

                    <button type="button" onClick={toggleHamburger}><i className="fa-solid fa-bars"></i></button>
                </div>
            </div>
        </div>
    </>
}



export default Header;