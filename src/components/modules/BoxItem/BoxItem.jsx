import React from 'react'

function BoxItem({ title, desc, icon }) {

    return (
        <div className="z-20 flex gap-y-2 flex-col justify-evenly items-start py-5 px-5 md:h-[15rem] shadow bg-sky-900 dark:bg-zinc-800 hover:border-b-2 hover:border-slate-500 dark:hover:border-green-700 transition-all cursor-pointer">
            <div className="text-slate-500 dark:text-green-700 text-[40px]">
                {icon}
            </div>
            <h2 className="text-[20px] text-zinc-300 ">{title}</h2>
            <p className="text-[15px] text-zinc-400"> {desc} </p>
        </div>
    )
}

export default BoxItem