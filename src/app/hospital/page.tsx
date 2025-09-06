"use client";

import { useState, FormEvent } from "react";

export default function HospitalPage() {
    const [uniqueCode, setUniqueCode] = useState("");
    const [details, setDetails] = useState<any>(null);
    const [stats, setStats] = useState<any>(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Verify Patient
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setDetails(null);
        setStats(null);
        setSuccess("");

        try {
            const res = await fetch(`/api/hospital?uniqueCode=${uniqueCode}`);
            const data = await res.json();

            if (data.success) {
                setDetails(data.data);
                setStats(data.stats);
            } else {
                setError(data.error || "Record not found");
            }
        } catch (err) {
            setError("Something went wrong");
        }
    };

    // Report Discount
    const handleDiscountSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const target = e.target as typeof e.target & {
            chalanNumber: { value: string };
            discountAmount: { value: string };
        };

        try {
            const res = await fetch("/api/discount", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    uniqueCode: details.uniqueCode,
                    chalanNumber: target.chalanNumber.value,
                    discountAmount: Number(target.discountAmount.value),
                    hospitalName: "ABC Hospital",
                }),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess("Discount reported successfully!");
                setDetails(data.card);
                setStats(data.stats);
            } else {
                setError(data.error || "Failed to submit discount");
            }
        } catch (err) {
            setError("Something went wrong");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg border border-[#D4AF37]/40">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                    Patient Verification
                </h2>

                {/* Patient Verification Form */}
                <form onSubmit={handleSubmit} className="mb-6">
                    <input
                        type="text"
                        placeholder="Enter Unique Code"
                        value={uniqueCode}
                        onChange={(e) => setUniqueCode(e.target.value)}
                        required
                        className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 rounded bg-[#D4AF37] text-black font-semibold hover:bg-yellow-500 transition"
                    >
                        Verify
                    </button>
                </form>

                {error && <p className="text-red-400 mb-4">{error}</p>}
                {success && <p className="text-green-400 mb-4">{success}</p>}

                {/* Patient Details */}
                {details && (
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
                        <h3 className="text-xl font-semibold mb-3 text-[#D4AF37]">Patient Details</h3>
                        <p><b>Name:</b> {details.name}</p>
                        <p><b>CNIC:</b> {details.cnic}</p>
                        <p><b>Mobile:</b> {details.mobile}</p>
                        <p><b>Email:</b> {details.email}</p>
                        <p><b>Receipt:</b> {details.receiptNumber}</p>
                        <p><b>Unique Code:</b> {details.uniqueCode}</p>
                        {stats && (
                            <div className="mt-4 text-sm text-gray-300">
                                <p><b>Total Visits:</b> {stats.totalVisits}</p>
                                <p><b>Total Discount Availed:</b> {stats.totalDiscount}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Discount Form */}
                {details && (
                    <form onSubmit={handleDiscountSubmit}>
                        <h3 className="text-xl font-semibold mb-3 text-[#D4AF37]">Apply Discount</h3>
                        <input
                            type="text"
                            name="chalanNumber"
                            placeholder="Chalan Number"
                            required
                            className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700"
                        />
                        <input
                            type="number"
                            name="discountAmount"
                            placeholder="Discount Amount"
                            required
                            className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700"
                        />
                        <button
                            type="submit"
                            className="w-full py-3 rounded bg-[#D4AF37] text-black font-semibold hover:bg-yellow-500 transition"
                        >
                            Submit Discount
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
