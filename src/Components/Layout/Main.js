import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import Hero from '../Pages/Hero/Hero';
import './Main.css'
import Skills from '../Pages/Skills/Skills';

const Main = () => {
    return (
        <div className='relative'>
            <div className='nav'>
                <Navbar ></Navbar>
            </div>
            <div>


                <Hero></Hero>
                <Skills></Skills>


            </div>


        </div>
    );
};

export default Main;