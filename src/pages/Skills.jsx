import Breadcrumb from "../components/modules/Breadcrumb/Breadcrumb"
import HeaderSctionBody from "../components/modules/HeaderSctionBody/HeaderSctionBody"
import ScrollTopBtn from "../components/modules/ScrollTopBtn/ScrollTopBtn"
import BlogsSection from "../components/template/BlogsSection"
import SkillsSection from "../components/template/SkillsSection"


function Skills() {
    return (
        <>
            <Breadcrumb title="مهارت ها" />

            <div className='flex flex-col mx-auto w-[93%] md:w-[93%] xl:w-[90%]'>
                <div>
                    <HeaderSctionBody title="مهارت های من" desc="مهارت ها و تکنولوژی ها" />
                    <SkillsSection />
                </div>
            </div>

            <ScrollTopBtn />
        </>
    )
}

export default Skills