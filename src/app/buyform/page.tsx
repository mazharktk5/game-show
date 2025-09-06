"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface FormData {
    name: string;
    cnic: string;
    mobile: string;
    email: string;
    receiptNumber: string;
    uniqueCode: number;
}

export default function BuyForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        cnic: "",
        mobile: "",
        email: "",
        receiptNumber: "",
        uniqueCode: Math.floor(1000 + Math.random() * 9000), // auto 4-digit code
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();


        // ✅ Save in MongoDB
        await fetch("/api/cards", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const phoneNumber = "923370372772";

        const message = `*New Sehat Card Purchase*

Name: ${formData.name}
CNIC: ${formData.cnic}
Mobile: ${formData.mobile}
Email: ${formData.email}
Receipt Number: ${formData.receiptNumber}
Unique Code: ${formData.uniqueCode}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");


        setSubmitted(true);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
            {!submitted ? (
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg border border-[#D4AF37]/40"
                >
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                        Buy Sehat Card
                    </h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700"
                    />

                    <input
                        type="text"
                        name="cnic"
                        placeholder="CNIC Number"
                        value={formData.cnic}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700"
                    />

                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700"
                    />

                    {/* New: Receipt Number (entered by user) */}
                    <input
                        type="text"
                        name="receiptNumber"
                        placeholder="Receipt Number"
                        value={formData.receiptNumber}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700"
                    />

                    {/* Auto-generated Unique Code */}
                    <input
                        type="text"
                        name="uniqueCode"
                        value={formData.uniqueCode}
                        readOnly
                        className="w-full p-3 mb-6 rounded bg-gray-700 text-gray-300 border border-gray-600"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded bg-[#D4AF37] text-black font-semibold hover:bg-yellow-500 transition"
                    >
                        Send via WhatsApp
                    </button>
                </form>
            ) : (
                <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg border border-[#D4AF37]/40 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">
                        Submitted Successfully!
                    </h2>
                    <p className="text-gray-300 mb-4">
                        Please send the payment screenshot to{" "}
                        <span className="text-[#D4AF37]">+92 300 1234567</span>
                    </p>
                    <p className="text-gray-400 mb-2">
                        Your receipt number:{" "}
                        <span className="font-bold text-[#D4AF37]">
                            {formData.receiptNumber}
                        </span>
                    </p>
                    <p className="text-gray-400 mb-6">
                        Your unique code:{" "}
                        <span className="font-bold text-[#D4AF37]">
                            {formData.uniqueCode}
                        </span>
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 rounded bg-[#D4AF37] text-black font-semibold hover:bg-yellow-500 transition"
                    >
                        Back to Home
                    </Link>
                </div>
            )}
        </section>
    );
}
