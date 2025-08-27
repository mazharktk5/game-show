"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./button";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-gray-900 text-white fixed top-0 left-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold tracking-wider text-purple-500">
                    🎮 GameZone
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/games" className="hover:text-purple-400 transition">Games</Link>
                    <Link href="/tournaments" className="hover:text-purple-400 transition">Tournaments</Link>
                    <Link href="/news" className="hover:text-purple-400 transition">News</Link>
                    <Link href="/community" className="hover:text-purple-400 transition">Community</Link>
                    <Button>Join Now</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden focus:outline-none"
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden flex flex-col bg-gray-800 px-6 py-4 gap-4">
                    <Link href="/games" className="hover:text-purple-400">Games</Link>
                    <Link href="/tournaments" className="hover:text-purple-400">Tournaments</Link>
                    <Link href="/news" className="hover:text-purple-400">News</Link>
                    <Link href="/community" className="hover:text-purple-400">Community</Link>
                    <Button className="w-full">Join Now</Button>
                </div>
            )}
        </nav>
    );
}
