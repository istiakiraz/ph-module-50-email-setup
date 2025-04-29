import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default root;