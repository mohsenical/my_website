import React from 'react'

function Button({ title }) {
    return (
        <div className="flex gap-x-5 *:flex *:justify-center *:items-center *:px-3 *:py-2 *:bg-slate-700 dark:*:bg-green-900 *:text-white dark:*:text-zinc-400 *:rounded-xl *:hover:text-gray-400 *:transition-colors *:cursor-pointer">

            <button className='text-[18px] xl:text-[20px]'> {title} </button>

        </div>
    )
}

export default Button