import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Home from '../../Home/Home';
import Headers from '../Headers/Headers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;