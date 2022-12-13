import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import Hero from '../Pages/Hero/Hero';
import './Main.css'

const Main = () => {
    return (
        <div className=''>
            <div className='relative'>
                <div className='nav'>
                    <Navbar ></Navbar>
                </div>

                <div><Hero></Hero></div>


            </div>


        </div>
    );
};

export default Main;