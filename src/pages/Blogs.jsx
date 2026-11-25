import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'
import Articles from '../components/modules/Articles/Articles'
import { articlesData } from '../Data/articlesData'
import React from 'react'
import BlogsSection from '../components/template/BlogsSection'

function Blog() {
    return (
        <>
            <Breadcrumb title="مقالات" />

            <div className='flex flex-col mx-auto w-[93%] md:w-[93%] xl:w-[90]'>
                <HeaderSctionBody title="مقالات" desc="همه مقالات سایت" />

                <div className="flex flex-col gap-y-4 h-[screen] w-full ">
                    <div
                        // data-aos="zoom-in"
                        className="grid grid-cols-1 xl:grid-cols-3 gap-x-2 md:gap-x-5 gap-y-5 mx-auto bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md p-5"
                    >
                        {
                            articlesData.map(data => (
                                <React.Fragment key={data.id}>
                                    <Articles {...data} />
                                </React.Fragment>
                            ))
                        }
                    </div>

                    <BlogsSection />
                </div>

            </div>

            <ScrollTopBtn />
        </>
    )
}

export default Blog