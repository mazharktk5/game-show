export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-gray-950 via-black to-yellow-950 text-gray-300 px-6 md:px-16 lg:px-24 xl:px-32 w-full overflow-hidden">
            {/* Glowing background accents */}
            <div className="absolute inset-0">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-12 py-16 border-b border-yellow-500/20">

                {/* Logo & Tagline */}
                <div className="max-w-sm">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400 tracking-widest drop-shadow-lg">
                        GAMER<span className="text-white">ZONE</span>
                    </h1>
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        Level up your career, win big in events, and unlock global
                        opportunities — all in one place.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-6">
                        <a href="#" className="p-2 rounded-full bg-yellow-500/10 hover:bg-yellow-400 hover:text-black transition shadow-md hover:shadow-yellow-400/40">
                            <svg width="20" height="20" fill="currentColor" className="">
                                <path d="M19.167 2.5a9.1..." />
                            </svg>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-yellow-500/10 hover:bg-yellow-400 hover:text-black transition shadow-md hover:shadow-yellow-400/40">
                            <svg width="20" height="20" fill="currentColor" className="">
                                <path d="M7.5 15.833c-4.167..." />
                            </svg>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-yellow-500/10 hover:bg-yellow-400 hover:text-black transition shadow-md hover:shadow-yellow-400/40">
                            <svg width="20" height="20" fill="currentColor" className="">
                                <path d="M13.333 6.667a5..." />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="font-bold text-yellow-400 mb-4 text-sm">EXPLORE</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-yellow-300 transition">Game Shows</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition">Lucky Draws</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition">Investments</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition">Abroad Jobs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-yellow-400 mb-4 text-sm">COMMUNITY</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-yellow-300 transition">Forums</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition">Events</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition">Workshops</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition">Mentorship</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-yellow-400 mb-4 text-sm">SUPPORT</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-yellow-300 transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition">Privacy</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition">Terms</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition">Contact</a></li>
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
