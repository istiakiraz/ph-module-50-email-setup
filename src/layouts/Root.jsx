import React from 'react';
import { Outlet } from 'react-router';

const root = () => {
    return (
        <>
            <h1 className='text-4xl font-thin text-center text-cyan-600 mt-8' >Explore email pass Auth</h1>
            <Outlet></Outlet>
        </>
    );
};

export default root;