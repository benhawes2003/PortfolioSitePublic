import { Link } from 'react-router-dom';

const Footer = () => {
    return <>
        <div className="site-footer">
            <div className="site-footer__inner grid-container">
                <div className="social-links">
                    <a className="standard-button" href="https://www.linkedin.com/in/ben-hawes-30b639203/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>

                <div className="page-links">
                    <Link to="/my-work">My Work</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/why">Why is this website so fast?</Link>
                </div>
            </div>
        </div>
    </>
}

export default Footer;