import clsx from 'clsx';

import useTopbarFixed from '../../../Hoocs/useTopbarFixed';

import { LiaWhatsapp } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SocialMedia() {

    const { fixTop } = useTopbarFixed()


    return (
        <div
            className={clsx("z-40 hidden md:block fixed md:flex flex-col gap-y-1.5 *:p-1 shadow *:text-[35px] *:bg-slate-700 dark:*:bg-green-900 text-white dark:text-gray-900 dark:*:text-zinc-300 *:rounded-md *:hover:text-gray-500 dark:*:hover:text-white *:transition-all *:cursor-pointer transition-all", fixTop ? " left-[1rem] bottom-[0rem]" : " left-[2.5rem] bottom-[2rem]")}>

            <Link to="https://github.com/mohsenical">
                <FaGithub />
            </Link>
            <Link to="https://wa.me/09145450730">
                <LiaWhatsapp />
            </Link>
            <Link to="https://www.linkedin.com/in/mohsenical">
                <LiaLinkedin />
            </Link>
            <Link to="https://t.me/Mohsenpeighami">
                <FaTelegram />
            </Link>
            <Link to="https://www.instagram.com/mohsenical">
                <FaInstagram />
            </Link>

        </div>
    )
}

export default SocialMedia