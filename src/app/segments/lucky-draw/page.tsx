"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import prizesImage from "../../assets/lucky-draw-image.jpg"; 
import prizesImage from "../../assets/lucky-draw.png";

export default function LuckyDrawPage() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={prizesImage}
                    alt="Lucky Draw Prizes"
                    fill
                    priority
                    className="object-contain object-center"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl px-6 py-16 text-center">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold drop-shadow-xl"
                >
                    <span className="bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                        Lucky Draw 2025
                    </span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto"
                >
                    Participate in{" "}
                    <span className="font-semibold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                        KPK’s Biggest Lucky Draw
                    </span>{" "}
                    and stand a chance to win life-changing prizes. Cars, bikes,
                    electronics, and more await you!
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-12"
                >
                    <Link href="/register?segment=game-show">
                        <button className="px-10 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] text-black shadow-xl hover:scale-105 transition duration-300">
                            Enter the Lucky Draw
                        </button>
                    </Link>
                    <p className="mt-4 text-gray-300 text-sm">
                        Hurry! Seats are limited. Register now and secure your chance to win.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
