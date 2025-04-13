import { GiHamburgerMenu } from "react-icons/gi"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <nav className="absolute top-0 left-0 w-full pt-8 text-white z-20">
                <div className="container">
                    <div className="flex items-center justify-between px-10">
                        {/* Logo Section */}
                        <motion.h1
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.3
                            }}
                            className='text-2xl font-semibold uppercase tracking-wider'>
                            <span className='text-primary'>Motion</span> Workshop
                        </motion.h1>

                        {/* Hamberger Section */}
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.6
                            }}
                        >
                            <GiHamburgerMenu
                                onClick={() => setSidebar(!sidebar)}
                            className="cursor-pointer text-2xl" />
                        </motion.div>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {sidebar && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.3
                        }}
                       className="absolute top-0 right-0 w-[140px] h-full 
                        bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-md z-10 text-white">
                            <div className="w-full h-full justify-center items-center">
                                <div className="flex flex-col items-center justify-center gap-6 h-full">
                                    {/* Line 1 */}
                                    <div className="w-[1px] h-[70px] bg-white/50">

                                    </div>

                                    {/* Social Icon */}
                                    <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                                        <FaFacebookF className="text-2xl" />
                                    </div>
                                    <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                                        <FaTwitter className="text-2xl" />
                                    </div>
                                    <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                                        <FaInstagram className="text-2xl" />
                                    </div>

                                    {/* Line 2 */}
                                    <div className="w-[1px] h-[70px] bg-white/50">

                                    </div>
                                </div>
                            </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}


