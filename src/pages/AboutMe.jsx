import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import AboutMeSection from '../components/template/AboutMeSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'
import Breadcrumb from "../components/modules/Breadcrumb/Breadcrumb"
import BoxSkills from '../components/modules/BoxSkills/BoxSkills'
import { skillsData } from '../Data/skillsData'

function AboutMe() {
    return (
        <>
            <>
                <Breadcrumb title="درباره من" />

                <div className='flex flex-col gap-y-5'>
                    <div className='flex flex-col mx-auto w-[93%] md:w-[93%] xl:w-[90%]'>
                        <HeaderSctionBody title="درباره من" desc="خلاصه ای از رزومه من" />
                        <AboutMeSection />

                        <HeaderSctionBody title="مهارت ها" desc="توانایی های من برای کمک ب شما" />
                        <div className="">
                            <div
                                // data-aos="zoom-in"
                                className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-x-1 md:gap-x-5 gap-y-1 md:gap-y-5 justify-center items-center mx-auto py-2 px-2 bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md"
                            >
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
                </div>


                <ScrollTopBtn />
            </>
        </>
    )
}

export default AboutMe