// app/register/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    });
    const [submitted, setSubmitted] = useState(false);

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
        if (
            !formData.fullName ||
            !formData.cnic ||
            !formData.email ||
            !formData.phone ||
            !formData.segment ||
            !formData.code ||
            !formData.receipt ||
            !formData.cv
        ) {
            alert("Please fill all required fields.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white min-h-screen flex items-center">
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-2xl mx-auto px-6 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center text-yellow-400 drop-shadow-xl"
                >
                    Registration Form
                </motion.h2>

                {!submitted ? (
                    <motion.form
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
                        <input
                            type="file"
                            name="cv"
                            accept=".pdf,.doc,.docx"
                            className="w-full text-gray-200"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="code"
                            placeholder="Unique Code"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-yellow-400"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="receipt"
                            placeholder="Receipt Number"
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
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg transition"
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
                    </motion.div>
                )}
            </div>
        </section>
    );
}
