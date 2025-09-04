"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "../assets/aboutimage.jpeg";

export default function AboutUs() {
    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-yellow-950 text-white overflow-hidden">
            {/* Decorative Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-32 left-20 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-32 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Full Image */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-start"
                >
                    <Image
                        src={aboutImage}
                        alt="SGC Shamroz Group of Companies"
                        className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
                        priority
                    />
                </motion.div>

                {/* Right: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        <span className="bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                            About SGC
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        The{" "}
                        <span className="font-semibold text-yellow-400">
                            Shamroz Group of Companies (SGC)
                        </span>{" "}
                        has been a cornerstone of innovation and community development since{" "}
                        <span className="font-bold text-white">1971</span>. With over five
                        decades of trust, vision, and progress, SGC continues to expand its
                        legacy across multiple industries.
                    </p>

                    <p className="text-base text-gray-400 leading-relaxed">
                        As the proud parent company of this game show, SGC brings unmatched
                        expertise in organizing impactful initiatives, fostering growth, and
                        creating meaningful experiences that connect people and inspire
                        communities.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
