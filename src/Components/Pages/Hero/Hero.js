import React from 'react';
import HeroImg from '../../../Assets/Hero/hero.gif'
import HeroBg from '../../../Assets/Hero/heroBg.jpg'
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { IconContext } from "react-icons";
import './Hero.css'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${HeroBg})` }} className='flex flex-col-reverse md:flex-row pt-10 px-3 bg-gray-700 bg-cover bg-blend-darken '>
            <div className='flex text-white px-4 md:w-1/2 lg:pl-24 '>
                <div className='hidden md:block pr-10 pt-1 '>



                    <IconContext.Provider value={{ size: 42 }}>
                        <div className='pb-10' >
                            <a href=""><FaFacebook /></a>
                        </div>
                        <div className='pb-10'>
                            <a href=""><FaGithub /></a>
                        </div>
                        <div className='pb-10'>
                            <a href=""><BsLinkedin /></a>
                        </div>
                    </IconContext.Provider>

                </div>
                <div>
                    <h2 className='text-3xl font-carter font-bold pb-3'>Hi there, I'm</h2>
                    <h1 className='text-5xl  font-extrabold pb-2'>Arafat Hossen</h1>
                    <h2 className='text-2xl font-carter font-bold pb-5' >Front End Developer</h2>
                    <p className='lg:w-96 text-xl '>MERN Stack Developer from Dhaka, Bangladesh. Passionate about technology. I love to explore new technologies, solve new problems and continuously learn new things to make the applications and websites I build more useful and enjoyable for their users.</p>
                    <div className="flex py-2">
                        <a target="blank" href='https://drive.google.com/file/d/1ghfZcnA-osfl0n5ntcdDBA89A6RH9P80/view?usp=share_link' className='border-2 text-rose-100 rounded-3xl border-rose-100 text-xl font-bold px-4 py-2'>Resume</a>
                    </div>
                </div>

            </div>
            <div className='px-4 pb-14 md:w-1/2 mx-auto my-auto'>
                <div className='rounded-full border-4 border-gray-100 md:w-[350px] mx-auto '>
                    <img className='p-5 rounded-full ' src={HeroImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hero;