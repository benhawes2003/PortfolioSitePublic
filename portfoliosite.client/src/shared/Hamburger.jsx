import { Link } from 'react-router-dom';

const Hamburger = () => {
    return <>
        <aside className="hamburger-overlay hamburger-toggle">
            <div onClick={toggleHamburger} className="hamburger-overlay__clickable"></div>
            <aside className="hamburger-menu hamburger-toggle">
                <div className="hamburger-menu__inner">
                    <button type="button" onClick={toggleHamburger}><i className="fa-solid fa-times"></i></button>

                    <Link onClick={toggleHamburger} className="main-link" to="/">Ben&apos;s Portfolio</Link>

                    <Link onClick={toggleHamburger} to="/my-work">My Work</Link>
                    <Link onClick={toggleHamburger} to="/about">About Me</Link>
                    <Link onClick={toggleHamburger} to="/why">Why is this website so fast?</Link>
                </div>
            </aside>
        </aside>
    </>
}

function toggleHamburger() {
    var elements = document.querySelectorAll('.hamburger-toggle');

    elements.forEach(function (element) {
        element.classList.toggle('active');
    });
}

export { Hamburger, toggleHamburger };