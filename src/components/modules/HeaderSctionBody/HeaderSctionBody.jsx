import React from 'react'
import { Link } from 'react-router-dom'

function HeaderSctionBody({ title, desc, button }) {
    return (
        <div className=" flex items-center justify-between p-2 mx-5  xl:mx-10 md:px-15 mb-3 md:mb-8 my-10 rounded-2xl">
            <div
                className=" flex flex-col gap-y-1 md:gap-y-0.5 border-r-2 border-sky-700 dark:border-green-700 px-2 md:px-5">
                <h2 className='text-[20px] lg:text-[25px] text-sky-700 dark:text-green-700'> {title} </h2>
                <h4 className='text-[15px] lg:text-[20px] text-gray-400 dark:text-gray-400'> {desc} </h4>
            </div>

            {button ? (
                <div className="*:px-2 *:py-2 *:bg-sky-900 dark:*:bg-green-700 *:text-white dark:*:text-zinc-300/90 *:rounded-xl *:hover:text-gray-300 *:transition-colors *:cursor-pointer">
                    <Link to="/contact-me" className="flex justify-center items-center text-[15px] lg:text-[17px]">
                        {button}
                    </Link>
                </div>
            ) : null}
        </div>
    )
}

export default HeaderSctionBody