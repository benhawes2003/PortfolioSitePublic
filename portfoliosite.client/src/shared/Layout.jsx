import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import { Hamburger, toggleHamburger } from './Hamburger';

const MainLayout = () => {
    return <>
        <Header toggleHamburger={toggleHamburger} />
        <Hamburger />
        <Outlet />
        <Footer />
    </>
};
export default MainLayout;