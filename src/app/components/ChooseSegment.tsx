"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Gamepad2,
    Gift,
    Briefcase,
    Plane,
    GraduationCap,
    Building2,
} from "lucide-react";

const segments = [
    {
        slug: "game-show",
        name: "Game Show",
        description: "Participate in exciting challenges and competitions",
        icon: Gamepad2,
    },
    {
        slug: "lucky-draw",
        name: "Lucky Draw",
        description: "Win amazing prizes in our lucky draw events",
        icon: Gift,
    },
    {
        slug: "jobs",
        name: "Jobs",
        description: "Explore job opportunities locally and abroad",
        icon: Briefcase,
    },
    {
        slug: "company-representative",
        name: "Company Representative",
        description: "Discover regional and international representation opportunities",
        icon: Building2,
    },
    {
        slug: "investment-abroad",
        name: "Investment / Visit Abroad",
        description: "Discover investment and travel opportunities",
        icon: Plane,
    },
    {
        slug: "scholar-entrepreneur",
        name: "Become a Scholar / Entrepreneur",
        description: "Educational and business development programs",
        icon: GraduationCap,
    },
];

export default function ChooseSegments() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-center 
            bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
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
                    Explore exciting opportunities designed to transform your future.
                </motion.p>

                {/* Cards Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {segments.map((segment, idx) => {
                        const Icon = segment.icon;

                        return (
                            <Link key={segment.slug} href={`/segments/${segment.slug}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                                    className="relative cursor-pointer bg-gradient-to-br from-[#F5E0A9]/10 via-[#D4AF37]/5 to-gray-900 
                    p-6 rounded-2xl shadow-lg border border-[#D4AF37]/40 
                    hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] 
                    group transition duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-full bg-gradient-to-r from-[#F5E0A9]/20 to-[#D4AF37]/20">
                                            <Icon className="w-7 h-7 text-[#D4AF37]" />
                                        </div>
                                        <h3
                                            className="text-lg font-semibold 
                        bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent"
                                        >
                                            {segment.name}
                                        </h3>
                                    </div>
                                    <p className="mt-3 text-gray-300 text-sm">
                                        {segment.description}
                                    </p>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
