"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-center 
                    bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
                >
                    Contact Us
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-4 text-center text-gray-300 max-w-2xl mx-auto"
                >
                    We'd love to hear from you. Reach out for inquiries, support, or collaborations.
                </motion.p>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-12 bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-[#D4AF37]/40"
                >
                    <form className="flex flex-col gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-4 rounded-xl bg-gray-800 border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none text-white placeholder-gray-400 transition"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-4 rounded-xl bg-gray-800 border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none text-white placeholder-gray-400 transition"
                        />
                        <textarea
                            rows={5}
                            placeholder="Your Message"
                            className="p-4 rounded-xl bg-gray-800 border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none text-white placeholder-gray-400 transition"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] text-gray-900 font-semibold hover:scale-105 transition-transform duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-12 text-center space-y-2 text-gray-300"
                >
                    <p>Email: <a href="mailto:info@example.com" className="text-yellow-400 hover:underline">info@example.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="text-yellow-400 hover:underline">+123 456 7890</a></p>
                    <p>Address: 123 Business St, City, Country</p>
                </motion.div>
            </div>
        </section>
    );
}
