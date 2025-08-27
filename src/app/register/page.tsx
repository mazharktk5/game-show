"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        cnic: "",
        email: "",
        phone: "",
        segment: "",
        code: "",
        receipt: "",
        cv: null as File | null,
        paid: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

    const segments = [
        "Lucky Draw",
        "Job in Pakistan",
        "Job Abroad",
        "Investment / Visit Abroad",
        "Become a Scholar / Entrepreneur",
        "Company Representative (KPK)",
        "Company Representative (Punjab)",
        "Company Representative (Sindh)",
        "Company Representative (Balochistan)",
        "Company Representative (Dubai)",
        "Company Representative (Middle East)",
        "Company Representative (Europe)",
        "Company Representative (USA)",
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, files } = e.target as any;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields
        if (
            !formData.fullName ||
            !formData.cnic ||
            !formData.email ||
            !formData.phone ||
            !formData.segment ||
            !formData.code ||
            ((formData.segment === "Lucky Draw" &&
                (!formData.paid || !formData.receipt)) ||
                ((formData.segment === "Job in Pakistan" ||
                    formData.segment === "Job Abroad") &&
                    !formData.cv))
        ) {
            alert("Please fill all required fields.");
            return;
        }

        if (!formRef.current) return;

        // Send via EmailJS
        emailjs
            .sendForm(
                "service_2fcnt5c", // Your service ID
                "template_5swtl32", // Your template ID
                formRef.current,
                "uHJxD71AiMCXgTihs" // Your public key
            )
            .then(
                () => {
                    setSubmitted(true);
                    formRef.current?.reset(); // clear inputs
                    setFormData({
                        fullName: "",
                        cnic: "",
                        email: "",
                        phone: "",
                        segment: "",
                        code: "",
                        receipt: "",
                        cv: null,
                        paid: "",
                    });
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    alert("Failed to send form. Please try again.");
                }
            );
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white min-h-screen flex items-center">
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-2xl mx-auto px-6 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
                >
                    Registration Form
                </motion.h2>

                {!submitted ? (
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-10 space-y-4 bg-gray-900/60 border border-yellow-500/30 shadow-lg rounded-2xl p-8"
                    >
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-yellow-400"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="cnic"
                            placeholder="CNIC / Passport Number"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-yellow-400"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-yellow-400"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-yellow-400"
                            onChange={handleChange}
                            required
                        />
                        <select
                            name="segment"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-yellow-400"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Segment</option>
                            {segments.map((seg) => (
                                <option key={seg} value={seg}>
                                    {seg}
                                </option>
                            ))}
                        </select>

                        {/* Conditional Fields */}
                        {formData.segment === "Lucky Draw" && (
                            <div className="space-y-2">
                                <p className="text-gray-300 font-semibold">Have you paid the registration fee?</p>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="paid"
                                            value="Yes"
                                            onChange={handleChange}
                                            required
                                        />
                                        Yes
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="paid"
                                            value="No"
                                            onChange={handleChange}
                                            required
                                        />
                                        No
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="receipt"
                                    placeholder="Receipt Number"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-yellow-400"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        {/* {(formData.segment === "Job in Pakistan" || formData.segment === "Job Abroad") && (
                            <div>
                                <label className="block text-gray-300 font-semibold mb-2">
                                    Upload Your CV
                                </label>
                                <input
                                    type="file"
                                    name="cv"
                                    accept=".pdf,.doc,.docx"
                                    className="w-full text-gray-200"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )} */}

                        <input
                            type="text"
                            name="code"
                            placeholder="Unique Code"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-yellow-400"
                            onChange={handleChange}
                            required
                        />

                        <p className="text-sm text-gray-400">
                            Note: Send your payment receipt screenshot on WhatsApp to{" "}
                            <span className="text-yellow-400">+92XXXXXXXXX</span>
                        </p>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] 
                            hover:from-[#F5E0A9]/90 hover:to-[#D4AF37]/90
                            shadow-[0_0_15px_rgba(212,175,55,0.7)] 
                            duration-200 hover:bg-yellow-600 cursor-pointer text-gray-900 font-semibold py-3 rounded-lg transition"
                        >
                            Complete Registration
                        </button>
                    </motion.form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-12 text-center bg-gray-900/60 border border-green-500/30 p-8 rounded-2xl shadow-lg"
                    >
                        <h2 className="text-lg font-semibold text-green-400">
                            ✅ Your response has been submitted
                        </h2>
                        <p className="text-gray-300 mt-2">
                            Please send the payment screenshot to{" "}
                            <span className="text-yellow-400">+92XXXXXXXXX</span>
                        </p>
                        <p className="text-gray-300 mt-2">
                            You will receive a confirmation email shortly.
                        </p>
                        <button
                            onClick={() => router.push("/")}
                            className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] text-gray-900 font-semibold hover:scale-105 transition-transform duration-300"
                        >
                            Back to Home
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
