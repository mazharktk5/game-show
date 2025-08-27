"use client";

import Button from "./button";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-yellow-900 text-white">
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-xl"
                >
                    Participate in Mega Game Show <span className="text-white">2025</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                >
                    Register now with <span className="text-yellow-400 font-semibold">5000 PKR</span>
                    and unlock multiple opportunities. <br />
                    Your gateway to career opportunities, investments, and life-changing experiences.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-10 flex flex-wrap justify-center gap-6"
                >
                    <Button className="bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg">
                        Register Now
                    </Button>
                    <Button className="bg-transparent border border-yellow-500 hover:bg-yellow-600 hover:text-black">
                        Explore Segments
                    </Button>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                >
                    <div>
                        <h3 className="text-4xl font-bold text-yellow-400">1000+</h3>
                        <p className="text-gray-300">Participants</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-yellow-400">14</h3>
                        <p className="text-gray-300">Segments</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-yellow-400">24/7</h3>
                        <p className="text-gray-300">Support</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
