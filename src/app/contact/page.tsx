"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

export default function ContactUs() {
    const form = useRef<HTMLFormElement>(null);
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs
            .sendForm(
                "service_2fcnt5c",
                "template_79y4c52",
                form.current,
                "uHJxD71AiMCXgTihs"
            )
            .then(
                () => {
                    setSubmitted(true);
                    form.current?.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
                {!submitted ? (
                    <>
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
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
                            We'd love to hear from you. Reach out for inquiries, support, or
                            collaborations.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-12 bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-[#D4AF37]/40"
                        >
                            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    className="p-4 rounded-xl bg-gray-800 border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none text-white placeholder-gray-400 transition"
                                    required
                                />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    className="p-4 rounded-xl bg-gray-800 border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none text-white placeholder-gray-400 transition"
                                    required
                                />
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Your Message"
                                    className="p-4 rounded-xl bg-gray-800 border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none text-white placeholder-gray-400 transition"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] text-gray-900 font-semibold hover:scale-105 transition-transform duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </>
                ) : (
                    // Confirmation popup
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gray-900/80 backdrop-blur-md p-12 rounded-3xl shadow-2xl border border-[#D4AF37]/40 text-center max-w-md mx-auto"
                    >
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl">
                            Message Sent!
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Thank you for reaching out. We will get back to you soon.
                        </p>
                        <button
                            onClick={() => router.push("/")}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] text-gray-900 font-semibold hover:scale-105 transition-transform duration-300"
                        >
                            Back to Home
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
