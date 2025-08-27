"use client";

import { Briefcase, FileText, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Benefits() {
    const benefits = [
        {
            title: "Send Your CV",
            description:
                "Submit your resume and get matched with the perfect opportunities that align with your skills and experience.",
            icon: FileText,
        },
        {
            title: "Discuss Investment Proposals",
            description:
                "Connect with investors and explore business opportunities that can help you grow financially.",
            icon: TrendingUp,
        },
        {
            title: "Get Maximum Benefits",
            description:
                "Unlock exclusive access to career advancement, investment opportunities, and life-changing experiences.",
            icon: Briefcase,
        },
    ];

    const perks = [
        "Direct access to top employers and recruiters",
        "Investment guidance from industry experts",
        "Networking opportunities with successful entrepreneurs",
        "Career counseling and mentorship programs",
        "International job placement assistance",
        "Business development workshops and seminars",
        "Exclusive investment opportunities",
        "24/7 support and guidance throughout your journey",
    ];

    return (
        <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
                    Maximum Benefits Await You
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
                    Send your CV, Discuss Investment Proposals, Get Maximum Benefits
                </p>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.6)]"
                        >
                            <div className="flex justify-center mb-6">
                                <item.icon className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* What You'll Get Section */}
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8">
                    What You'll Get
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto text-left">
                    {perks.map((perk, idx) => (
                        <li
                            key={idx}
                            className="flex items-start space-x-3 bg-gray-900/50 p-4 rounded-xl border border-yellow-500/10 hover:border-yellow-400/40 transition"
                        >
                            <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                            <span className="text-gray-300">{perk}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
