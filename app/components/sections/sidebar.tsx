import Image from "next/image";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Socials } from "../buttons/socials";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";
import { AppContextType } from "../types";
import ContactForm from "../cards/contactForm";
const Sidebar = () => {
    const {toggleInfo, setToggle} = useContext(AppContext) as AppContextType;
    return (
        <aside className="rounded-xl bg-gray-200 overflow-hidden h-full w-full flex flex-col gap-5 dark:bg-lightBg lg:pb-16 lg:col-span-2 2xl:pb-0">
            <div className="flex flex-col gap-2">
                <Image className="w-full" src="/gideon.png" alt="Gideon Amisi" width={500} height={650} priority />
                <div className="px-5 pb-3">
                    <h1 className="text-xl font-semibold font-poppins">Gideon Amisi</h1>
                    <p className="font-light text-sm text-gray-800 dark:text-brand">Software Engineer</p>
                    <div className="w-full h-auto flex justify-end py-3 md:hidden">
                        <div onClick={() => {setToggle()}} className="w-12 h-12 relative rounded-lg flex text-darkBg justify-center items-center bg-lightAccent dark:bg-darkBg dark:text-brand hover:scale-105">
                            {toggleInfo ? <FaAngleUp size={32}  /> : <FaAngleDown size={32}  />}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`flex-col ${toggleInfo ? 'flex': 'hidden md:flex'}`}>
                <ContactForm />
                <div className="px-5 border-t border-gray-600 py-5 md:px-10">
                    <Socials />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;