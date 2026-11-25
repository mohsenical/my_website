import { SiTicktick } from "react-icons/si";
import Form from "../modules/Form/Form";

function ContactMeSection() {
    return (
        <div className=" h-[screen] w-full ">
            <div
                // data-aos="fade-up"
                className="divide-y md:divide-none divide-zinc-100/30 dark:divide-gray-100/30 flex flex-col xl:flex-row gap-x-0 md:gap-x-5 justify-center items-center mx-auto py-5 bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md"
            >

                <div className="px-5 w-full md:w-[65%]">
                    <div className="w-full flex flex-col gap-y-3 justify-evenly items-start">

                        <p className='text-[20px] text-zinc-300 dark:text-gray-400'>تماس با من</p>
                        <h2 className='text-[22px] text-zinc-300 dark:text-white'> <span className='text-slate-500 dark:text-green-700'>درباره پروژه بعدی</span> صعبت کنیم </h2>

                        <p className='text-[15px] leading-7 text-zinc-300 dark:text-gray-400 '>
                            در سریع‌ترین زمان ممکن پاسخگوی شما هستیم!
                            ارتباط مستقیم و بی‌واسطه با کارشناسان متخصص ۲۴ ساعته، ۷ روز هفته در خدمت شما
                        </p>

                        <ul className='flex flex-col gap-y-2 items-start justify-center'>
                            <li className="flex items-center justify-center gap-x-3 text-white mt-2">
                                <SiTicktick className='text-slate-500 dark:text-green-700 text-xl' />
                                5+ سال تجربه مفید
                            </li>
                            <li className="flex items-center justify-center gap-x-3 text-white">
                                <SiTicktick className='text-slate-500 dark:text-green-700 text-xl' />
                                طراح وب حرفه‌ای
                            </li>
                            <li className="flex items-center justify-center gap-x-3 text-white">
                                <SiTicktick className='text-slate-500 dark:text-green-700 text-xl' />
                                تحویل به موقع
                            </li>
                        </ul>

                    </div>
                </div>

                <Form />
            </div>

        </div>
    )
}

export default ContactMeSection