import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from 'react-icons/rx';
import { TiThSmall } from 'react-icons/ti';
import { FaSearch } from 'react-icons/fa';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r">
            <div className="container mx-auto px-4 ">
                <div className="flex justify-between items-center py-4 ">
                    <div className="flex items-center text-white justify-center space-x-5">
                        <TiThSmall className='text-2xl' />
                        <h1 className="text-white bangla text-3xl">বাপেক</h1>
                    </div>
                    <div className="hidden md:flex gap-8 text-white font-bold">
                        <div className="relative items-center justify-center">
                            <div className="flex items-center justify-center mt-2">
                                <input className='rounded-full'></input>
                                <FaSearch className='absolute text-blue right-[10px] cursor-pointer'></FaSearch>
                            </div>
                        </div>
                        <NavLink to="login" className="text-blue bg-white py-2 px-3 rounded-full">Login</NavLink>
                        <NavLink to="signup" className="text-blue bg-white py-2 px-3 rounded-full">Signup</NavLink>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 text-2xl"
                        >{isOpen ? <RxCross1></RxCross1> : <RiMenu3Line></RiMenu3Line>}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col space-y-4 mt-4 text-white font-bold">
                            <NavLink className="hover:text-gray-400">About</NavLink>
                            <NavLink className="hover:text-gray-400">Courses</NavLink>
                            <NavLink className="hover:text-gray-400">Home</NavLink>
                            <NavLink className="hover:text-gray-400">Contact</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
