export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-gray-950 via-black to-yellow-950 text-gray-300 px-6 md:px-16 lg:px-24 xl:px-32 w-full overflow-hidden">
            {/* Glowing background accents */}
            <div className="absolute inset-0">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#F5E0A9]/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-12 py-16 border-b border-[#D4AF37]/20">

                {/* Logo & Tagline */}
                <div className="max-w-sm">
                    <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest drop-shadow-lg 
                        bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                        GAMER<span className="text-white">ZONE</span>
                    </h1>
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        Level up your career, win big in events, and unlock global
                        opportunities — all in one place.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-6">
                        <a href="#" className="p-2 rounded-full bg-[#F5E0A9]/10 hover:bg-gradient-to-r hover:from-[#F5E0A9] hover:to-[#D4AF37] hover:text-black transition shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                            <svg width="20" height="20" fill="currentColor">
                                <path d="M19.167 2.5a9.1..." />
                            </svg>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-[#F5E0A9]/10 hover:bg-gradient-to-r hover:from-[#F5E0A9] hover:to-[#D4AF37] hover:text-black transition shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                            <svg width="20" height="20" fill="currentColor">
                                <path d="M7.5 15.833c-4.167..." />
                            </svg>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-[#F5E0A9]/10 hover:bg-gradient-to-r hover:from-[#F5E0A9] hover:to-[#D4AF37] hover:text-black transition shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                            <svg width="20" height="20" fill="currentColor">
                                <path d="M13.333 6.667a5..." />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="font-bold text-sm mb-4 
                            bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                            EXPLORE
                        </h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Game Shows</a></li>
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Lucky Draws</a></li>
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Investments</a></li>
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Abroad Jobs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-sm mb-4 
                            bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                            COMMUNITY
                        </h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Forums</a></li>
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Events</a></li>
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Workshops</a></li>
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Mentorship</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-sm mb-4 
                            bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                            SUPPORT
                        </h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Privacy</a></li>
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Terms</a></li>
                            <li><a href="#" className="hover:text-[#F5E0A9] transition">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="relative z-10 py-6 text-center">
                <p className="text-xs md:text-sm text-gray-500">
                    © {new Date().getFullYear()} GamerZone. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
