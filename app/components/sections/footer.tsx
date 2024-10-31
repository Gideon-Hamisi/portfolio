const Footer = () => {
    const year = new Date()
    return (
        <footer className="w-full h-max flex flex-col items-center mt-5 bg-gray-200 dark:bg-lightBg rounded-xl py-5 text-sm font-light dark:text-gray-300">
            <p>Developed with 💪 by Gideon Amisi</p>
            <p className="text-xs italic">© {year.getFullYear()}</p>
        </footer>
    )
}

export default Footer;