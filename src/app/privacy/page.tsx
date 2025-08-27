"use client";

import { motion } from "framer-motion";

export default function Policies() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white ">
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-5xl mx-auto  px-6 space-y-16">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl mt-5 mb-6 md:text-5xl font-bold text-center bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
                >
                    Privacy Policies
                </motion.h1>

                {/* Privacy Policy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gray-900/50 backdrop-blur-md p-8 mb-2 rounded-2xl shadow-lg border border-[#D4AF37]/40 space-y-6"
                >
                    <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                        Privacy Policy
                    </h2>

                    <p className="text-gray-300 text-sm">
                        Your privacy is important to us. We collect personal information only to provide a better experience on our site.
                    </p>

                    <h3 className="text-lg font-semibold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">Information We Collect</h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        <li>Contact information like email or phone number</li>
                        <li>Usage data such as pages visited and time spent</li>
                        <li>Cookies and tracking data for website optimization</li>
                    </ul>

                    <h3 className="text-lg font-semibold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">How We Use Your Data</h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        <li>To improve and personalize your experience</li>
                        <li>To send updates or important information</li>
                        <li>To maintain security and prevent misuse</li>
                    </ul>

                    <h3 className="text-lg font-semibold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">Your Rights</h3>
                    <p className="text-gray-300 text-sm">
                        You may request access to your personal data, ask for corrections, or request deletion at any time. We will handle your data responsibly.
                    </p>
                </motion.div>

                {/* Terms of Service */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-[#D4AF37]/40 space-y-6"
                >
                    <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                        Terms of Service
                    </h2>

                    <p className="text-gray-300 text-sm">
                        By using our website, you agree to follow these terms. Please read carefully.
                    </p>

                    <h3 className="text-lg font-semibold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent ">Usage Rules</h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        <li>Do not misuse or disrupt the website services</li>
                        <li>Do not attempt to access unauthorized data or accounts</li>
                        <li>Respect other users and the community guidelines</li>
                    </ul>

                    <h3 className="text-lg font-semibold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">Account Responsibility</h3>
                    <p className="text-gray-300 text-sm">
                        You are responsible for safeguarding any login credentials and ensuring your account is used only by you.
                    </p>

                    <h3 className="text-lg font-semibold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">Changes to Terms</h3>
                    <p className="text-gray-300 text-sm">
                        We may update these terms periodically. Continued use of the site means you accept any changes.
                    </p>

                    <h3 className="text-lg font-semibold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">Liability</h3>
                    <p className="text-gray-300 text-sm">
                        We are not liable for any damages or losses resulting from use of this site. Use at your own risk.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
