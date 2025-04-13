"use client";

import { motion } from "framer-motion";

const Location = () => {
  return (
    <>
        <div className="container my-36">
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-14">
                {/* Form Section */}
                    <Form />
                {/* GPS Section */}
                    <Gps />
            </div>
        </div>
    </>
  )
}

export default Location

function Form() {
    return (
        <>
            <div className="space-y-8">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.1
                    }}
                    className="text-3xl font-bold text-gray-600">
                    Buy Our Product from anywhere!
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.3
                    }}
                    className="flex items-center justify-center gap-4">
                    <input 
                        type="text" 
                        className="input-style w-full lg:w-[150px] focus:outline-none border focus:border-primary" 
                        placeholder="Name" />
                    <input 
                        type="email" 
                        className="input-style w-full focus:outline-none border focus:border-primary" 
                        placeholder="Email" />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2
                    }}
                    className="flex items-center justify-center gap-4">
                    <input 
                        type="text" 
                        className="input-style w-full focus:outline-none border focus:border-primary" 
                        placeholder="Country" />
                    <input 
                        type="text" 
                        className="input-style w-full lg:w-[150px] focus:outline-none border focus:border-primary" 
                        placeholder="Zipcode" />
                </motion.div>
                <motion.button 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4
                    }}
                    className="primary-btn w-full shadow-xl">สั่งเลย
                </motion.button>
            </div>
        </>
    )
}

function Gps() {

    const gpsMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013530.3655120679!2d99.92036494408623!3d7.114062443826801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304cd5dcaf092441%3A0x259b3778ec1d8e12!2z4Liq4LiH4LiC4Lil4Liy!5e0!3m2!1sth!2sth!4v1744556829151!5m2!1sth!2sth"

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.1
                }}
                className="">
                <iframe 
                    className="rounded-xl w-full sm:w-[300px] sm:h-[300px] md:h-[250px] overflow-hidden shadow-2xl mx-auto"
                    src={gpsMap} 
                    title="Google Map"
                    width={600} 
                    height={450} 
                    style={{border: 2, borderRadius: "0.5rem"}}
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </motion.div>
        </>
    )
}




