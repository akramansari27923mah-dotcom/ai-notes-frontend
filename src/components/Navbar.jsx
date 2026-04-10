import { useState } from "react";
import { Menu, X, Sparkles, Workflow, Layers, Rocket, Loader, LoaderCircle } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { AuthCon } from "../contexts/auth.context";
import useAuth from "../hooks/auth.hook";


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState('0%')
    const [showProfile, setShowProfile] = useState(false)
    const { user, loader } = AuthCon()
    const { logout } = useAuth()


    return (
        <div id="Home" className='flex  justify-between items-center py-4 md:px-8 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-400 border-b  border-white/30 '>

            <div className='flex justify-center items-center gap-2'>
                <img src="logo.png" alt="Logo" />
                <h1 className='md:text-2xl text-lg font-bold italic text-white'>
                    NoteCraft AI
                </h1>
            </div>

            {/* for leptop */}
            <div className='md:block hidden'>
                <ul className='flex justify-center items-center gap-5 text-white font-semibold '>
                    <li className="cursor-pointer">
                        <a href="#Features">Features</a>
                    </li>

                    <li className="cursor-pointer">
                        <a href="#Works">How it  Works</a>
                    </li>

                    <li className="cursor-pointer">
                        <a href="#Perfect">Perfect For</a>
                    </li>

                    <Link to={'/create'} className='px-4 py-2 rounded-lg bg-white text-black shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 active:scale-75'>
                        Get Started
                    </Link>

                    <Link to={'/dashboard'} className='px-4 py-2 rounded-lg bg-white text-black shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 active:scale-75'>
                        Dashboard
                    </Link>

                    <Link to={'/aitutor'} className='px-4 py-2 rounded-lg bg-white text-black shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 active:scale-75'>
                        AI Tutor
                    </Link>


                    {
                        user && (
                            <div
                                onClick={() => setShowProfile(!showProfile)}
                                className="capitalize py-1 px-3 font-bold text-lg rounded-full bg-white text-black hover:scale-105 transition-all duration-300 active:scale-75 cursor-pointer shadow-lg">
                                {user?.username[0]}
                            </div>
                        )
                    }


                    {
                        !user && (
                            <li className="px-4 py-2 animate__animated animate__rubberBand  animate__repeat-3 rounded-lg bg-green-500 active:scale-75 transition-all duration-300 hover:opacity-80">
                                <NavLink to={'/login'}>
                                    Login
                                </NavLink>
                            </li>
                        )
                    }

                    {
                        showProfile && (

                            <div className="absolute top-[60px] z-10 right-[60px] p-2 rounded-b-lg rounded-tl-lg bg-white ">

                                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4 ">
                                    <div className="flex flex-col items-center">
                                        <h2 className="text-gray-700 text-lg font-semibold mb-1">Username</h2>
                                        <p className="text-black text-base">{user?.username || <LoaderCircle className="animate-spin" size={15} />}</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h2 className="text-gray-700 text-lg font-semibold mb-1">Email</h2>
                                        <p className="text-black text-base">{user?.email || <LoaderCircle className="animate-spin" size={15} />}</p>
                                    </div>
                                </div>

                                {
                                    user && (
                                        <li className="px-4 py-2 rounded-lg bg-red-500 active:scale-75 transition-all duration-300 hover:opacity-80 flex justify-center items-center cursor-pointer text-center mt-2" onClick={logout}>
                                            {
                                                loader ? <LoaderCircle className="animate-spin" size={20} /> : 'Logout'
                                            }
                                        </li>
                                    )
                                }
                            </div>
                        )
                    }
                </ul>
            </div>

            {/* for mobile */}
            <div className="md:hidden cursor-pointer text-white">
                <Menu onClick={() => setOpenMenu('45%')} />
            </div>

            {/* mobile menu bar */}
            <div
                style={{ width: openMenu }}
                className="fixed  md:hidden top-0 right-0 h-screen overflow-hidden transition-all duration-300 bg-gray-900 z-10">

                <button className="text-white p-2" onClick={() => setOpenMenu('0%')}>
                    <X />
                </button>

                <ul className="flex flex-col items-center gap-6 text-white">

                    <li className="cursor-pointer">
                        <a href="#Features" className="flex items-center gap-2">
                            <Sparkles size={18} />
                            Features
                        </a>
                    </li>

                    <li className=" cursor-pointer">
                        <a href="#Works" className="flex items-center gap-2">
                            <Workflow size={18} />
                            How it Works
                        </a>
                    </li>

                    <li className=" cursor-pointer">
                        <a href="#Perfect" className="flex items-center gap-2">
                            <Layers size={18} />
                            Perfect For
                        </a>
                    </li>

                    <Link to={'/dashboard'} className='px-4 py-2 rounded-lg bg-white/40 text-white shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 active:scale-75'>
                        Dashboard
                    </Link>

                    <Link to={'/aitutor'} className='px-4 py-2 rounded-lg bg-white/40 text-white shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 active:scale-75'>
                        AI Tutor
                    </Link>

                    <Link to={'/create'} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/40 cursor-pointer hover:bg-white/60 transition text-nowrap">
                        <Rocket size={18} />
                        Get Started
                    </Link>

                    {
                        !user ? (
                            <li className="px-4 py-2 rounded-lg bg-green-500 active:scale-75 transition-all duration-300 hover:opacity-80">
                                <NavLink to={'/login'}>
                                    Login
                                </NavLink>
                            </li>
                        ) : <li className="px-4 py-2 rounded-lg bg-red-500 active:scale-75 transition-all duration-300 hover:opacity-80 cursor-pointer" onClick={logout}>
                            {
                                loader ? <Loader className="animate-spin" size={20} /> : 'Logout'
                            }
                        </li>
                    }
                </ul>
            </div>

        </div>
    )
}

export default Navbar