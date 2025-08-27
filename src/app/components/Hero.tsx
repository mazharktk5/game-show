"use client";

import Link from "next/link";
import Button from "./button";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white">
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
                >
                    Participate in <span className="text-white">KPK Game Show</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                >
                    Register now to participate in the <span className="bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md font-semibold">Lucky Draw </span>
                    and unlock amazing prizes. <br />
                    Your chance to win, explore opportunities, and take part in exciting events.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-10 flex flex-wrap justify-center gap-6"
                >
                    <Link href="/register">
                        <Button className="bg-yellow-500 cursor-pointer text-black hover:bg-yellow-400 shadow-lg">
                            Register for Lucky Draw
                        </Button>
                    </Link>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                >
                    <div>
                        <h3 className="text-4xl font-bold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
                            1000+
                        </h3>
                        <p className="text-gray-300">Participants</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
                            14
                        </h3>
                        <p className="text-gray-300">Segments</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
                            24/7
                        </h3>
                        <p className="text-gray-300">Support</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
