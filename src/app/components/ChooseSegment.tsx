"use client";

import { motion } from "framer-motion";
import { Gamepad2, Gift, Briefcase, Globe2, Plane, GraduationCap, Building2, Users } from "lucide-react";

const segments = [
    {
        name: "Game Show",
        description: "Participate in exciting challenges and competitions",
        icon: Gamepad2,
    },
    {
        name: "Lucky Draw",
        description: "Win amazing prizes in our lucky draw events",
        icon: Gift,
    },
    {
        name: "Job in Pakistan",
        description: "Find the perfect career opportunity locally",
        icon: Briefcase,
    },
    {
        name: "Job Abroad",
        description: "Explore international career prospects",
        icon: Globe2,
    },
    {
        name: "Investment / Visit Abroad",
        description: "Discover investment and travel opportunities",
        icon: Plane,
    },
    {
        name: "Become a Scholar / Entrepreneur",
        description: "Educational and business development programs",
        icon: GraduationCap,
    },
    {
        name: "Company Representative (KPK)",
        description: "Regional representative opportunities in KPK",
        icon: Building2,
    },
    {
        name: "Company Representative (Punjab)",
        description: "Regional representative opportunities in Punjab",
        icon: Building2,
    },
    {
        name: "Company Representative (Sindh)",
        description: "Regional representative opportunities in Sindh",
        icon: Building2,
    },
    {
        name: "Company Representative (Balochistan)",
        description: "Regional representative opportunities in Balochistan",
        icon: Building2,
    },
    {
        name: "Company Representative (Dubai)",
        description: "Business opportunities in Dubai",
        icon: Users,
    },
    {
        name: "Company Representative (Middle East)",
        description: "Expand your reach in the Middle East",
        icon: Users,
    },
    {
        name: "Company Representative (Europe)",
        description: "Connect with opportunities across Europe",
        icon: Users,
    },
    {
        name: "Company Representative (USA)",
        description: "Establish connections in the USA",
        icon: Users,
    },
];

export default function ChooseSegments() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900
        text-white">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-center text-yellow-400 drop-shadow-xl"
                >
                    Choose Your Segment
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-4 text-center text-gray-300 max-w-2xl mx-auto"
                >
                    Explore 14 exciting opportunities designed to transform your future.
                </motion.p>

                {/* Cards Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {segments.map((segment, idx) => {
                        const Icon = segment.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.05 }}
                                className="relative bg-gradient-to-br from-yellow-500/10 via-yellow-600/5 to-gray-900 
             p-6 rounded-2xl shadow-lg border border-yellow-500/30 
             hover:border-yellow-400 hover:shadow-yellow-400/30 
             group transition duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-400 
                    group-hover:bg-yellow-400 group-hover:text-black transition">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-yellow-300 group-hover:text-yellow-200">
                                        {segment.name}
                                    </h3>
                                </div>
                                <p className="mt-3 text-gray-300 text-sm group-hover:text-gray-100 transition">
                                    {segment.description}
                                </p>
                            </motion.div>

                        );
                    })}
                </div>
            </div>
        </section>
    );
}
