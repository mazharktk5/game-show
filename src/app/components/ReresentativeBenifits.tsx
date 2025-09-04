"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Award, Crown } from "lucide-react";

const levels = [
    {
        name: "Silver Level",
        requirement: "Refer 10 Friends",
        benefits: [
            "Exclusive Silver Badge",
            "1 Extra Lucky Draw Entry",
            "Priority Seating in Events",
        ],
        icon: Users,
        color: "from-gray-500/30 to-gray-800/50",
    },
    {
        name: "Gold Level",
        requirement: "Refer 20 Friends",
        benefits: [
            "All Silver Benefits",
            "3 Extra Lucky Draw Entries",
            "Special Shout-out on Stage",
        ],
        icon: Award,
        color: "from-yellow-400/30 to-yellow-800/50",
    },
    {
        name: "Platinum Level",
        requirement: "Refer 30 Friends",
        benefits: [
            "All Gold Benefits",
            "VIP Access at the Game Show",
            "Meet & Greet with Hosts",
        ],
        icon: Crown,
        color: "from-purple-500/30 to-purple-900/50",
    },
];

export default function GameShowLevels() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-yellow-950 text-white">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
                >
                    Game Show Referral Levels
                </motion.h2>

                <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto">
                    Invite your friends to the game show! The more people you bring, the
                    higher your level and the more chances you get to win big.
                </p>

                {/* Cards Grid */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {levels.map((level, idx) => {
                        const Icon = level.icon;
                        return (
                            <motion.div
                                key={level.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className={`p-8 rounded-2xl shadow-xl border border-yellow-500/30 
                bg-gradient-to-br ${level.color} hover:border-yellow-400 transition`}
                            >
                                <div className="flex justify-center">
                                    <div className="p-4 rounded-full bg-yellow-600/20">
                                        <Icon className="w-10 h-10 text-yellow-400" />
                                    </div>
                                </div>
                                <h3 className="mt-6 text-2xl font-bold text-center text-yellow-300">
                                    {level.name}
                                </h3>
                                <p className="mt-2 text-center text-gray-200 font-medium">
                                    {level.requirement}
                                </p>
                                <ul className="mt-6 space-y-2 text-gray-300 text-sm">
                                    {level.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="text-yellow-400">✔</span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 flex justify-center">
                                    <Link href="/register?segment=game-show">
                                        <button className="px-6 py-3 bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] 
                      text-gray-900 font-semibold rounded-xl shadow-lg hover:scale-105 
                      transition-transform duration-300">
                                            Register Now
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
