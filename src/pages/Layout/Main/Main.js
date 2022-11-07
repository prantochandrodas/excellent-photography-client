import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../Home/Home';
import Headers from '../Headers/Headers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;