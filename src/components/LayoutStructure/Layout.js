import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { keyRoutes } from '../RoutePaths/RouteConstant';
import Toaster from '../../utility/Alerts/Toaster';
import Header from '../../components/NavbarContainer/NavbarComponent';
import Footer from '../../components/FooterContainer/FooterComponent';

const Layout = () => {

    return (
        <>
            <Toaster />
            <Header />
            {/* <div className='main_layout_container'> */}
            {/* <div className='main_layout_content'> */}
            <Outlet />
            {/* </div> */}
            {/* </div> */}
            <Footer />

            {window.location.pathname == '/' ? (<Navigate to={keyRoutes.CONTACT_LIST} replace={true} />) : null}
        </>
    );
};

export default Layout;