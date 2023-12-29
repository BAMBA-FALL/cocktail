import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../component/public/Header';
const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Layout;