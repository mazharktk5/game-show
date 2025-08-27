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
        bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
        hover:from-yellow-300 hover:to-yellow-500 
        shadow-[0_0_15px_rgba(255,215,0,0.7)] 
        transition duration-200 ${className || ""}`}
        >
            {children}
        </button>
    );
}
