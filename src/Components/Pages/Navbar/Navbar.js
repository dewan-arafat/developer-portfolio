import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../Assets/Menubar/menu2.png'

const Navbar = () => {
    return (
        <div className=''>
            <div className="bg-gray-500 flex justify-between items-center h-[70px] px-4">
                <div className="flex ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <img className='w-[30px] h-[30px]' src={Menu} alt="" />
                        </label>
                        <ul tabIndex={0} className="menu-compact dropdown-content mt-4 p-2 shadow bg-black rounded-box w-52 text-rose-50">
                            <li className='py-1 px-2'><Link to='/'>Home</Link></li>
                            <li className='py-1 px-2'><Link to='/about'>About</Link></li>
                            <li className='py-1 px-2'><Link>Contact</Link></li>
                            <li className='py-1 px-2'><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <Link className="btn text-white btn-ghost normal-case text-xl font-logo">Arafat H.</Link>
                </div>
                <div className=" hidden lg:flex text-rose-50">
                    <ul className="flex px-3 ">
                        <li className='px-2 '><Link className='border-2 rounded-3xl border-rose-100 text-xl font-bold px-4 py-2 hover:bg-rose-100 hover:text-gray-500'>Home</Link></li>
                        <li className='px-2'><Link className='border-2 rounded-3xl border-rose-100 text-xl font-bold px-4 py-2 hover:bg-rose-100 hover:text-gray-500'>About</Link></li>
                        <li className='px-2'><Link className='border-2 rounded-3xl border-rose-100 text-xl font-bold px-4 py-2 hover:bg-rose-100 hover:text-gray-500'>Contact</Link></li>
                        <li className='px-2'><Link className='border-2 rounded-3xl border-rose-100 text-xl font-bold px-4 py-2 hover:bg-rose-100 hover:text-gray-500'>Blog</Link></li>
                    </ul>
                </div>
                <div className="flex">
                    <Link className='border-2 text-rose-100 rounded-3xl border-rose-100 text-xl font-bold px-4 py-2'>Resume</Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;