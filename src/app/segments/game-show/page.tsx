"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GameShowPage() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/video/game-show-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl px-6">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                >
                    <span className="bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                        Welcome to the Game Show
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-6 text-lg md:text-2xl text-gray-200 leading-relaxed"
                >
                    Join{" "}
                    <span className="font-semibold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                        KPK’s Biggest Challenge
                    </span>{" "}
                    where fun meets competition. Compete with the best, unlock thrilling
                    opportunities, and make memories for a lifetime.
                </motion.p>

                {/* Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-200"
                >
                    {/* Card 1 */}
                    <div className="p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-[#D4AF37]/40 shadow-xl hover:scale-105 hover:border-[#D4AF37]/70 transition duration-300">
                        <h3 className="text-xl font-bold text-[#D4AF37] mb-2">
                            🎁 Big Rewards
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Win exciting prizes that will make the competition even more
                            thrilling.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-[#D4AF37]/40 shadow-xl hover:scale-105 hover:border-[#D4AF37]/70 transition duration-300">
                        <h3 className="text-xl font-bold text-[#D4AF37] mb-2">
                            🔥 Non-stop Fun
                        </h3>
                        <p className="text-sm leading-relaxed">
                            High-energy games, surprises, and unforgettable entertainment.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-[#D4AF37]/40 shadow-xl hover:scale-105 hover:border-[#D4AF37]/70 transition duration-300">
                        <h3 className="text-xl font-bold text-[#D4AF37] mb-2">
                            🎤 Meet Celebrities
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Get the chance to interact with top stars, take photos, and
                            share memories
                        </p>
                    </div>
                </motion.div>

                {/* Register Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-12"
                >
                    <Link href="/register?segment=game-show">
                        <button className="px-10 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-110 hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] transition-transform duration-300">
                            Register for Game Show
                        </button>
                    </Link>
                    <p className="mt-4 text-gray-300 text-sm italic">
                        Seats are limited — don’t miss out on the ultimate experience!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
