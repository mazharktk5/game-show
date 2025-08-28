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

export default SocialLinks;