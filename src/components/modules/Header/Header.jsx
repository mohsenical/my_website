import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

import useDarkMode from "../../../Hoocs/useDarkMode";
import useTopbarFixed from "../../../Hoocs/useTopbarFixed";
import SideBar from "../SideBar/SideBar";
import Berger from "../Berger/Berger";

import { menuItem } from "../../../Data/menuData"

import { FaSun, FaMoon } from "react-icons/fa";


function Header() {

    const [sideBar, setSideBar] = useState(false)
    const { isDark, toogleDarkMode } = useDarkMode()

    const { fixTop } = useTopbarFixed()

    const sideBarOpen = () => {
        setSideBar(true)
    }

    const sideBarClose = () => {
        setSideBar(false)
    }


    return (
        <>
            {/* Header Laptop & Tablet Responsive */}
            <header className='hidden md:block'>
                <div className={clsx("z-50 flex right-0 left-0 items-center h-12 lg:h-15 shadow-xl  dark:bg-black/50 backdrop-blur-xl transition-all", fixTop ? "fixed top-5 w-[90%] mx-auto bg-white/50 rounded-2xl" : "fixed top-0 w-screen bg-white")}>
                    <div className="flex items-center justify-between w-full px-6 lg:px-10 py-5">
                        <nav className='flex items-center gap-x-5 lg:gap-x-9'>
                            <ul className='flex gap-x-5 lg:gap-x-7 *:text-[15px] lg:text-xl text-gray-900 *:hover:text-zinc-500 dark:text-zinc-400 dark:*:hover:text-white *:transition-colors'>

                                {menuItem.map(menu => (
                                    <li key={menu.id}>
                                        <NavLink className={clsx(() => console.log(true))} to={menu.href}>{menu.title}</NavLink>
                                    </li>
                                ))}

                            </ul>
                        </nav>

                        <div className='flex items-center gap-x-4 lg:gap-x-5  '>
                            <button className='flex gap-x-2 text-xl lg:text-[20px] cursor-pointer transition-all' onClick={toogleDarkMode}>
                                {
                                    isDark ? (<FaSun className='text-yellow-600' />) : (<FaMoon className='text-zinc-500' />)
                                }
                            </button>

                            <span className="w-[2px] h-7 bg-zinc-900/50 dark:bg-gray-200/50"></span>

                            <Link to="/" className='flex items-center gap-x-0.5 justify-center h-full cursor-pointer'>
                                <span className='mt-2 text-gray-900 hover:text-zinc-500 dark:text-zinc-400 dark:hover:text-white transition-colors  text-xl lg:text-[18px] mb-1'>Mohsenical</span>
                                <img className='size-6 lg:size-5 bg-cover' src='/Image/Logo.png' alt='Avatar' />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Header Mobile Responsive */}
            <header className={clsx("flex fixed inset-0 items-center md:hidden justify-between w-full h-22 py-5 px-5 dark:bg-black/20 bg-white/20 backdrop-blur-xl shadow-lg z-50 transition-all")}>
                <div className="">
                    <Berger sideBarOpen={sideBarOpen} />
                </div>

                <div className='flex items-center justify-center gap-x-3 h-full'>
                    <span className='dark:text-zinc-300 text-zinc-900 text-2xl mt-1.5'>محسن پیغامی</span>
                    <img className='size-15 object-containobject-contain rounded-full' src='/Image/Avatar.jpg' alt='Avatar' />
                </div>
            </header>

            {
                sideBar && (<SideBar sideBarClose={sideBarClose} />)
            }

        </>
    )
}

export default Header


// "fixed top-8 right-0 left-0 flex items-center w-[98%] lg:w-[90%] h-18 lg:h-24 mx-auto shadow bg-black/50 backdrop-blur-xl rounded-3xl" headers fixed