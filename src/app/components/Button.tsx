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
            className={`px-6 py-2 rounded-xl font-bold text-white 
        bg-gradient-to-r from-purple-600 to-pink-600 
        hover:opacity-90 transition duration-200 shadow-lg ${className || ""}`}
        >
            {children}
        </button>
    );
}
