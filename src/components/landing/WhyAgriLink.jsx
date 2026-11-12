import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const stats = [
    { value: '50K+', label: 'Farmers Empowered', description: 'Active users on our platform' },
    { value: '35%', label: 'Higher Income', description: 'Average increase in farmer earnings' },
    { value: '2M+', label: 'Transactions', description: 'Successfully processed trades' },
    { value: '99.5%', label: 'Satisfaction', description: 'Customer satisfaction rate' },
];

const benefits = [
    'Direct market access eliminating middlemen',
    'Fair and transparent pricing mechanisms',
    'Real-time market intelligence and insights',
    'Financial services and micro-loans access',
    'Training programs and expert support',
    'Quality certification and premium markets',
];

export default function WhyAgriLink() {
    return (
        <section id="why" className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-green-600 font-medium text-sm tracking-wider uppercase">Why AgriLink</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                            The smarter way<br />to farm and trade
                        </h2>
                        <p className="text-xl text-gray-600 mb-10">
                            We're not just another marketplace. We're building the infrastructure 
                            for sustainable agricultural growth across emerging markets.
                        </p>

                        {/* Benefits List */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Button 
                            size="lg"
                            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-14 group"
                        >
                            Learn more about us
                            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Button>
                    </motion.div>

                    {/* Stats Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl transform rotate-3 scale-105 opacity-10" />
                        
                        <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-10 lg:p-12">
                            <div className="grid grid-cols-2 gap-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                                    >
                                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-green-100 font-medium mb-1">
                                            {stat.label}
                                        </div>
                                        <div className="text-green-200/70 text-sm">
                                            {stat.description}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quote */}
                            <div className="mt-10 pt-8 border-t border-white/20">
                                <blockquote className="text-white/90 text-lg italic">
                                    "AgriLink transformed how we sell our produce. We now earn 40% more and have direct relationships with buyers."
                                </blockquote>
                                <div className="mt-4 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">
                                        MK
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">Mary Kariuki</div>
                                        <div className="text-green-200 text-sm">Farmer, Kenya</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}