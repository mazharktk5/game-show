"use client";

import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 rounded-xl font-bold text-black 
    bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] 
    hover:from-[#F5E0A9]/90 hover:to-[#D4AF37]/90
    shadow-[0_0_15px_rgba(212,175,55,0.7)] 
    transition duration-200 ${className || ""}`}
        >
            {children}
        </button>

    );
}
