import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-green-50/50 to-white">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-100/20 to-emerald-100/20 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-8">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Now available in 12 countries
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                            Connecting farms to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                                futures
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
                            Empowering smallholder farmers with technology, market access, and sustainable practices for a thriving agricultural ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                size="lg" 
                                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-14 text-base shadow-xl shadow-green-600/20 hover:shadow-green-600/40 transition-all group"
                            >
                                Start your journey
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button 
                                variant="outline" 
                                size="lg"
                                className="rounded-full px-8 h-14 text-base border-gray-200 hover:border-green-200 hover:bg-green-50 group"
                            >
                                <Play className="mr-2 w-5 h-5 text-green-600" />
                                Watch demo
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-16 pt-8 border-t border-gray-100">
                            <p className="text-sm text-gray-500 mb-4">Trusted by leading agricultural organizations</p>
                            <div className="flex items-center gap-8 opacity-60">
                                {['FAO', 'USAID', 'WorldBank', 'IFAD'].map((org) => (
                                    <div key={org} className="text-gray-400 font-semibold text-lg">
                                        {org}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10">
                            <img
                                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                                alt="Sustainable farming"
                                className="w-full h-[500px] lg:h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute -left-8 bottom-20 bg-white rounded-2xl p-5 shadow-xl shadow-gray-200/50 max-w-[200px]"
                        >
                            <div className="text-3xl font-bold text-green-600 mb-1">50K+</div>
                            <div className="text-sm text-gray-600">Farmers connected to markets</div>
                        </motion.div>

                        {/* Floating Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute -right-4 top-20 bg-white rounded-2xl p-5 shadow-xl shadow-gray-200/50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <span className="text-2xl">🌱</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Sustainable</div>
                                    <div className="text-sm text-gray-500">Eco-certified</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}