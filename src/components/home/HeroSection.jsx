import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#76b82a]/30 to-[#5a9920]/20 blur-3xl"
                />
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
                    className="absolute bottom-0 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#3d5a30]/30 to-[#76b82a]/20 blur-3xl"
                />
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#76b82a]/20 blur-3xl"
                />
            </div>

            {/* Nature Background with Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 backdrop-blur-xl bg-white/40 border border-white/60 text-[#3d5a30] rounded-full text-sm font-medium shadow-lg"
                        >
                            <div className="w-2 h-2 bg-[#76b82a] rounded-full animate-pulse shadow-lg shadow-[#76b82a]/50"></div>
                            <span className="tracking-wide">Innovation in Agriculture</span>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                Grow Smarter.
                                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3d5a30] via-[#76b82a] to-[#5a9920]">
                                    Harvest Better.
                                </span>
                            </h1>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="backdrop-blur-xl bg-white/30 border border-white/60 rounded-3xl p-6 shadow-xl"
                        >
                            <p className="text-xl text-gray-700 leading-relaxed">
                                A mobile-first marketplace connecting farmers directly with buyers, 
                                eliminating middlemen and ensuring fair prices
                                <span className="block mt-1 text-gray-600 text-lg">(for everyone)</span>
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Link
                                to={createPageUrl('Contact')}
                                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-gray-900 text-white rounded-2xl text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-2xl shadow-gray-900/20 hover:shadow-gray-900/40 hover:scale-[1.02]"
                            >
                                Join the Pilot
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to={createPageUrl('Resources')}
                                className="group inline-flex items-center justify-center gap-3 px-8 py-5 backdrop-blur-xl bg-white/50 border border-white/80 text-gray-900 rounded-2xl text-lg font-medium hover:bg-white/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 text-white ml-0.5" />
                                </div>
                                Explore Resources
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Visual - 3D Mockup with Parallax */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative perspective-1000"
                    >
                        <motion.div
                            animate={{ 
                                rotateY: [0, 2, 0, -2, 0],
                                rotateX: [0, -1, 0, 1, 0]
                            }}
                            transition={{ 
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative transform-gpu"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Main Device Mockup */}
                            <div className="relative aspect-[4/5] backdrop-blur-2xl bg-gradient-to-br from-white/60 to-white/30 rounded-[3rem] overflow-hidden border border-white/80 shadow-2xl">
                                {/* Screen Content */}
                                <div className="absolute inset-4 bg-gradient-to-br from-[#76b82a] to-[#5a9920] rounded-[2.5rem] overflow-hidden">
                                    <div className="relative w-full h-full flex items-center justify-center p-8">
                                        <img 
                                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694c0b925377af21a066bfeb/83967ab55_AgriLinkLogo.png" 
                                            alt="AgriLink" 
                                            className="w-full h-full object-contain drop-shadow-2xl"
                                        />
                                        
                                        {/* Animated Glow Effect */}
                                        <motion.div
                                            animate={{ 
                                                opacity: [0.3, 0.6, 0.3],
                                                scale: [1, 1.1, 1]
                                            }}
                                            transition={{ 
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Reflection */}
                                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Info Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="absolute -left-8 top-1/4 backdrop-blur-xl bg-white/80 border border-white/90 rounded-2xl p-4 shadow-2xl"
                                style={{ transform: 'translateZ(50px)' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#76b82a] to-[#5a9920] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        45%
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Yield Increase</div>
                                        <div className="text-sm font-semibold text-gray-900">Average Impact</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="absolute -right-8 bottom-1/4 backdrop-blur-xl bg-white/80 border border-white/90 rounded-2xl p-4 shadow-2xl"
                                style={{ transform: 'translateZ(50px)' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3d5a30] to-[#76b82a] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        10K+
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Farms Connected</div>
                                        <div className="text-sm font-semibold text-gray-900">Growing Network</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Shadow/Reflection underneath */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-gray-900/10 blur-2xl rounded-full" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}