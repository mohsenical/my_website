import { skillsData } from '../../Data/skillsData';
import BoxSkills from '../modules/BoxSkills/BoxSkills';

function SkillsSection() {
    return (
        <div className=" h-[screen] pb-5 w-full ">


            <div
                // data-aos="fade-up"
                className="flex flex-col gap-x-0 gap-y-5 md:gap-y-7 justify-center md:justify-evenly items-center py-4 px-5 bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md"
            >

                <div className="w-full">
                    <div className="w-full flex flex-col justify-center items-start gap-y-1">
                        <h2 className='text-[20px] md:text-[25px] text-zinc-300 dark:text-white mb-4'> <span className='text-slate-500 dark:text-green-700'>کاوش مهارت‌های </span> محبوب </h2>
                        <h3 className='text-[15px] md:text-[20px] text-zinc-300 dark:text-gray-400'>مهارت‌های من</h3>

                        <div className='flex flex-col gap-y-0.5 mt-2'>
                            <p className=' text-zinc-300 dark:text-gray-400 text-[15px] leading-6'>
                                در دنیای پررقابت امروز، مهارت‌های تخصصی و تجربه عملی، کلید موفقیت در هر زمینه‌ای محسوب می‌شوند. من با بهره‌گیری از دانش به‌روز و خلاقیت بی‌پایان، همواره در پی خلق راهکارهای نوآورانه و مؤثر هستم.
                            </p>

                            <p className=' text-zinc-300 dark:text-gray-400 text-[15px] leading-6'>
                                تعهد به کیفیت، دقت در اجرا و توجه به جزئیات، اصولی هستند که در تمام مراحل کارم رعایت می‌کنم تا بهترین نتایج ممکن را برای پروژه‌ها به ارمغان آورم.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-1.5">

                    {
                        skillsData.map(box => (
                            <div key={box.id}>
                                <BoxSkills {...box} />
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default SkillsSection