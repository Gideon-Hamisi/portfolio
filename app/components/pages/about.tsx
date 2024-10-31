import React from "react";
import Testimonials from "../cards/testimonials";

const AboutMe = () => {
    return (
        <section className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 col-span-2 tracking-wide leading-tight md:text-lg md:font-medium">
                <p>
                    Hi, I&apos;m Gideon, a <span className="dark:text-brand dark:font-normal font-extrabold font-jost">Data Scientist ML Developer / Data Analyst / Business Intelligence Developer</span> with over 3 years of experience creating innovative, data-driven solutions. 
                    I specialize in building and deploying scalable machine learning models, predictive analytics, and data pipelines that enhance operational efficiency and drive meaningful insights.
                    Alongside technical development, I enjoy sharing knowledge through tutorials and workshops, empowering others to grow in the data science community.
                </p>
                <p>
                    Whether you&#39;re seeking someone to transform complex data into actionable insights or need expertise in end-to-end data solutions, I’m here to help. 
                    Let&#39;s work together to bring your vision to life and achieve impactful results!
                </p>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex w-full justify-between items-center">
                    <h2 className="text-2xl h-max relative font-semibold after:bg-brand after:w-14 after:h-1 after:absolute after:rounded-md after:-bottom-2 after:left-0 md:text-3xl">Testimonials</h2>
                </div>
            
                <div className="flex flex-col gap-10 bg-gray-300 dark:bg-bg py-10 rounded-2xl md:flex-row">
                    <Testimonials />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;