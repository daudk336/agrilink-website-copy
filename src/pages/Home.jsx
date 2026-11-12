import React from 'react';
import HeroSection from '../components/home/HeroSection';
import { Sprout, TrendingUp, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
    const highlights = [
        { icon: Sprout, value: '10K+', label: 'Farms Connected' },
        { icon: TrendingUp, value: '45%', label: 'Yield Increase' },
        { icon: Users, value: '50K+', label: 'Active Users' },
        { icon: Shield, value: '99.9%', label: 'Uptime' },
    ];

    return (
        <div>
            <HeroSection />

            {/* Highlights Section */}
            <section className="relative py-32 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
                <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#76b82a]/10 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#3d5a30]/10 blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Built for Impact
                            <span className="block text-2xl text-gray-600 mt-2 font-normal">(Real Results, Real Growth)</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group"
                                >
                                    <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#76b82a] to-[#5a9920] text-white mb-6 shadow-lg shadow-[#76b82a]/30"
                                        >
                                            <Icon className="w-8 h-8" />
                                        </motion.div>
                                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 mb-2">
                                            {item.value}
                                        </div>
                                        <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                                            {item.label}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="relative py-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#3d5a30]"></div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-[#76b82a] blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-[#5a9920] blur-3xl"></div>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-full text-sm font-medium mb-8 shadow-xl">
                            <span className="tracking-wide">Trusted by Leading Farms</span>
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                            Join Thousands of Farmers
                            <span className="block text-2xl text-white/60 mt-3 font-normal">(Building the Future Together)</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                            From small family farms to large agricultural enterprises, 
                            AgriLink is powering the future of sustainable farming.
                        </p>
                    </motion.div>
                    
                    {/* Partner Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 flex items-center justify-center h-24 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all"
                            >
                                <span className="text-white/60 font-semibold text-lg">Partner {i}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#76b82a]/20 to-[#5a9920]/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-[#3d5a30]/20 blur-3xl"></div>

                <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/90 rounded-[3rem] p-16 shadow-2xl text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Ready to Start
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3d5a30] to-[#76b82a]">
                                    Growing Together?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Join AgriLink's community and connect directly with buyers and fellow farmers
                                <span className="block text-lg mt-1">(10,000+ farmers already connected)</span>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-12 py-5 bg-gray-900 text-white rounded-2xl text-lg font-semibold shadow-2xl shadow-gray-900/20 hover:shadow-gray-900/40 transition-all"
                            >
                                Join the Pilot
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-12 py-5 backdrop-blur-xl bg-white/70 border border-white text-gray-900 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                            >
                                Explore the App
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}