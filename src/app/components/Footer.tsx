import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialLinks() {
    return (
        <div className="flex items-center gap-4 mt-6">
            <a
                href="#"
                className="p-2 rounded-full bg-[#F5E0A9]/10 hover:bg-gradient-to-r 
        hover:from-[#F5E0A9] hover:to-[#D4AF37] hover:text-black 
        transition shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
            >
                <FaFacebookF size={20} />
            </a>

            <a
                href="#"
                className="p-2 rounded-full bg-[#F5E0A9]/10 hover:bg-gradient-to-r 
        hover:from-[#F5E0A9] hover:to-[#D4AF37] hover:text-black 
        transition shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
            >
                <FaTwitter size={20} />
            </a>

            <a
                href="#"
                className="p-2 rounded-full bg-[#F5E0A9]/10 hover:bg-gradient-to-r 
        hover:from-[#F5E0A9] hover:to-[#D4AF37] hover:text-black 
        transition shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
            >
                <FaInstagram size={20} />
            </a>
        </div>
    );
}

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
                    <SocialLinks />
                </div>

                {/* Quick Links */}
                <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#F5E0A9]">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/home" className="hover:text-[#D4AF37] transition">Home</a></li>
                            <li><a href="/contact" className="hover:text-[#D4AF37] transition">About Us</a></li>
                            <li><a href="#segments" className="hover:text-[#D4AF37] transition">Segments</a></li>

                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#F5E0A9]">Opportunities</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/segments/jobs" className="hover:text-[#D4AF37] transition">Job in Pakistan</a></li>
                            <li><a href="/segments/jobs" className="hover:text-[#D4AF37] transition">Job Abroad</a></li>
                            <li><a href="/segments/investment-abroad" className="hover:text-[#D4AF37] transition">Invest Abroad</a></li>

                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#F5E0A9]">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/contact" className="hover:text-[#D4AF37] transition">Contact Us</a></li>
                            <li><a href="/privacy" className="hover:text-[#D4AF37] transition">Privacy Policy</a></li>
                            <li><a href="/privacy" className="hover:text-[#D4AF37] transition">Terms of Service</a></li>

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
