import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-green-600 font-medium text-sm tracking-wider uppercase">About Us</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                        Growing together,<br />thriving together
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We believe in a world where every farmer has the tools and connections to succeed.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="rounded-2xl overflow-hidden h-48">
                                    <img
                                        src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&q=80"
                                        alt="Farmer in field"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden h-64">
                                    <img
                                        src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c8b27?w=400&q=80"
                                        alt="Fresh produce"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="rounded-2xl overflow-hidden h-64">
                                    <img
                                        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3f32?w=400&q=80"
                                        alt="Agricultural technology"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden h-48">
                                    <img
                                        src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&q=80"
                                        alt="Farm landscape"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative element */}
                        <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-10"
                    >
                        {/* Mission */}
                        <div className="group">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                                    <Target className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To revolutionize agricultural supply chains by connecting smallholder farmers directly with buyers, 
                                        eliminating middlemen, and ensuring fair prices for quality produce. We leverage technology to 
                                        create transparent, efficient, and sustainable food systems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="group">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors duration-300">
                                    <Eye className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        A world where every farmer, regardless of scale, has equal access to markets, technology, 
                                        and resources. We envision agriculture that feeds communities, sustains livelihoods, 
                                        and protects our planet for future generations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                            <div>
                                <div className="text-3xl font-bold text-gray-900">2019</div>
                                <div className="text-sm text-gray-500 mt-1">Founded</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900">12</div>
                                <div className="text-sm text-gray-500 mt-1">Countries</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900">85+</div>
                                <div className="text-sm text-gray-500 mt-1">Team Members</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}