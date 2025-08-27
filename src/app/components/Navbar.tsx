"use client";


import { useState } from "react";
import Button from "./button";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 shadow-lg 
        bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-extrabold tracking-wider text-yellow-400"
                >
                    ✨ GameZone
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10 font-medium">
                    <Link href="/segments/jobs" className="hover:text-yellow-400 transition">
                        Jobs
                    </Link>
                    <Link href="/segments/company-representative" className="hover:text-yellow-400 transition">
                        Representative
                    </Link>
                    <Link href="/contact" className="hover:text-yellow-400 transition">
                        Contact Us
                    </Link>
                    <a href="#segments" className="hover:text-yellow-400 transition">
                        Segments
                    </a>

                </div>

                {/* Join Now Button */}
                <div className="hidden md:block">
                    <Link href="/register">
                        <Button className="bg-yellow-400 text-black px-5 cursor-pointer py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
                            Join Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden focus:outline-none text-yellow-400 text-2xl"
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden flex flex-col bg-gray-900 px-6 py-4 gap-4 border-t border-yellow-500/30">
                    <Link href="/games" className="hover:text-yellow-400">Games</Link>
                    <Link href="/tournaments" className="hover:text-yellow-400">Tournaments</Link>
                    <Link href="/news" className="hover:text-yellow-400">News</Link>
                    <Link href="/community" className="hover:text-yellow-400">Community</Link>
                    <Link href="/register">
                        <Button className="w-full bg-yellow-400 text-black rounded-lg hover:bg-yellow-300">
                            Join Now
                        </Button>
                    </Link>
                </div>
            )}
        </nav>

    );
}
