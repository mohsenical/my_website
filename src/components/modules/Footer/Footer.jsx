import React from 'react'

import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { menuItem } from '../../../Data/menuData';
import { Link, Links } from 'react-router-dom';


function Footer() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center  md:items-start w-full mt-10 py-8  bg-white dark:bg-black text-white'>

            <div className="flex flex-col gap-y-4 py-4 px-5 mb-5 w-full md:w-[60%] h-full">
                <div className="w-full">
                    <h1 className='text-[20px] dark:text-white/80 text-gray-900 danpm run devrk:text-white '>محسن پیغامی</h1>
                </div>

                <p className='w-full dark:text-gray-400 text-black leading-7 text-[15px]'>
                    راه‌حل‌های حرفه‌ای برای محصولات، فراتر از معرفی ویژگی‌های ساده، مستقیماً بر حل چالش‌های پیچیده کسب‌وکارها متمرکز هستند. این راه‌حل‌ها با قابلیت یکپارچه‌سازی بدون دردسر با سیستم‌های موجود و مقیاس‌پذیری همراه با رشد کسب‌وکار، طراحی شده‌اند.
                </p>

                <div className=" flex items-start gap-x-3 w-full mt-2">
                    <button className='py-2 px-3 text-[15px]  rounded-xl bg-slate-500 dark:bg-green-900  text-white dark:text-gray-400 hover:text-zinc-400 dark:hover:text-white transition-all cursor-pointer'>
                        <Link to="/about-me">
                            درباره من
                        </Link>
                    </button>
                    <button className='py-2 px-3 text-[15px]  rounded-xl bg-slate-500 dark:bg-green-900  text-white dark:text-gray-400 hover:text-zinc-400 dark:hover:text-white transition-all cursor-pointer'>
                        <Link to="/contact-me">
                            تماس
                        </Link>
                    </button>
                </div>
            </div>


            <div className='flex justify-evenly items-start w-full md:w-[40%]'>
                <div className="flex flex-col gap-y-4 px-5">
                    <h2 className='text-xl dark:text-white/80 text-gray-900 danpm run devrk:text-white '>لینک های سریع</h2>

                    <ul className=' flex flex-col gap-y-2.5 mr-4 *:dark:text-gray-400 *:text-black *:hover:dark:text-white *:hover:text-gray-400 *:transition-all'>

                        {
                            menuItem.map(menu => (
                                <li key={menu.id} className=''>
                                    <div className="flex justify-start items-center gap-x-2">
                                        <div className='w-[5px] h-[5px] bg-slate-700 dark:bg-green-900 rounded-full'></div>
                                        <Link to={menu.href}>{menu.title}</Link>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </div>

                <div className="flex flex-col gap-y-3 px-5">
                    <h2 className='text-xl dark:text-white/80 text-gray-900 danpm run devrk:text-white '>دسترسی ها</h2>

                    <div className="flex gap-x-2 items-center justify-start mr-5">
                        <IoLocationSharp className='text-2xl text-slate-700 dark:text-green-700' />
                        <span className="text-md text-black dark:text-gray-400">ایران / ارومیه</span>
                    </div>

                    <div className="flex gap-x-2 items-center justify-start mr-5">
                        <CgMail className='text-2xl text-slate-700 dark:text-green-700' />
                        <span className="text-md text-black dark:text-gray-400">mohsenical.web@gmail.com</span>
                    </div>

                    <div className="flex gap-x-2 items-center justify-start mr-5">
                        <AiOutlinePhone className='text-2xl text-slate-700 dark:text-green-700' />
                        <span className="text-md text-black dark:text-gray-400">0914-545-0730</span>
                    </div>
                    <div className="flex gap-x-2 items-center justify-start mr-5">
                        <MdOutlineBrowserUpdated className='text-2xl text-slate-700 dark:text-green-700' />
                        <span className="text-md text-black dark:text-gray-400">آخرین بهروزرسانی:  1404/10/8</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer