"use client"

import BgImage from "../../../public/assets/bg-slate.png"
import BlackCoffee from "../../../public/assets/black.png"
import Image from "next/image";
import { Navbar } from "../Navbar/Navbar";
import { motion } from "framer-motion";

export const Hero = () => {
    const bgImage = {
        backgroundImage: `url(${BgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

    const MotionImage = motion(Image);

    return (
        <>
            <motion.main 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.1
                }}
                style={bgImage}>
                <section className="min-h-[750px] w-full relative text-white">
                    <div className="container">
                        {/* Navbar Section */}
                        <Navbar />
                        {/* Hero Section */}

                        {/* Card Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                            {/* Text Content Section */}
                            <div className="text-lightOrange mt-[100px] md:mt-0 space-y-28 p-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.2
                                    }}
                                    className="text-3xl md:text-5xl font-bold leading-tight ml-14">
                                        Frontend Motion
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.6
                                    }}
                                    className="relative">
                                    <div className="relative z-10 space-y-4">
                                        <h1 className="text-2xl text-primaryDark md:text-4xl font-bold">Coder Life style</h1>
                                        <h1 className="text-sm opacity-55 leading-loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum porro nemo sunt nobis unde sit quisquam fuga, ratione accusantium?</h1>
                                    </div>
                                    <div className="absolute z-0 -top-6 bg-gray-700/25 -left-10 w-[250px] h-[200px]" ></div>
                                </motion.div>
                            </div>

                            {/* Hero Img Section */}
                            <div className="relative">
                                <MotionImage
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.2
                                    }}
                                    className="relative z-40 h-[400px] md:h-[700px] img-shadow"
                                    src={BlackCoffee}
                                    alt="heroimg"
                                >
                                </MotionImage>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }} 
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 100, 
                                        damping: 10, 
                                        delay: 0.3 
                                    }} 
                                    className="border-[20px] border-primary w-[180px] h-[180px] rounded-full absolute top-24 -right-16 z-10" />
                                <div className="absolute -top-20 left-[250px] z-1">
                                    <motion.h1
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 10,
                                            delay: 0.4
                                        }}
                                        className="text-[80px] sm:text-[120px] md:text-[200px] scale-105 font-bold text-Dark/40 leading-none">
                                            Coder Your Life
                                    </motion.h1>
                                </div>
                            </div>

                            {/* Third Div Section */}
                            <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.3
                                }}
                                className="text-lightOrange mt-[100px] md:mt-0 space-y-28 p-4">
                                    <h1 className="text-3xl md:text-5xl font-bold leading-tight ml-14 z-100 opacity-0">
                                        Rest our Life</h1>

                                <div className="relative">
                                    <div className="relative z-10 space-y-4">
                                        <motion.h1
                                            initial={{ opacity: 0, y: -100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 10,
                                                delay: 0.6
                                            }}
                                            className="text-2xl text-primaryDark md:text-4xl font-bold">
                                                Motion Framer
                                        </motion.h1>
                                        <motion.h1
                                            initial={{ opacity: 0, y: -100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 10,
                                                delay: 0.7
                                            }}
                                            className="text-sm opacity-55 leading-loose">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum porro nemo sunt nobis unde sit quisquam fuga, ratione accusantium?
                                        </motion.h1>
                                    </div>
                                    <div className="absolute z-0  bg-gray-700/70 -top-6 -right-10 w-[530px] h-[200px]" ></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </motion.main>
        </>
    )
}



