import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, TrendingUp, Truck, Shield, Leaf } from 'lucide-react';

const features = [
    {
        icon: Smartphone,
        title: 'Mobile-First Platform',
        description: 'Access markets, track orders, and manage your farm from anywhere with our intuitive mobile app.',
        color: 'from-green-500 to-green-600',
        bgColor: 'bg-green-50',
    },
    {
        icon: TrendingUp,
        title: 'Real-Time Pricing',
        description: 'Get live market prices and analytics to make informed decisions about when and where to sell.',
        color: 'from-emerald-500 to-emerald-600',
        bgColor: 'bg-emerald-50',
    },
    {
        icon: Truck,
        title: 'Logistics Network',
        description: 'Reliable transportation and cold chain solutions to ensure your produce reaches markets fresh.',
        color: 'from-teal-500 to-teal-600',
        bgColor: 'bg-teal-50',
    },
    {
        icon: Shield,
        title: 'Secure Payments',
        description: 'Fast, transparent payments directly to your account with full transaction history and protection.',
        color: 'from-green-600 to-emerald-600',
        bgColor: 'bg-green-50',
    },
    {
        icon: Leaf,
        title: 'Sustainable Practices',
        description: 'Training and certification programs for eco-friendly farming that commands premium prices.',
        color: 'from-lime-500 to-green-500',
        bgColor: 'bg-lime-50',
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-green-600 font-medium text-sm tracking-wider uppercase">What We Do</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                        Everything you need<br />to grow your farm
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our comprehensive platform provides tools and services designed specifically for modern agriculture.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 ${
                                index === 0 ? 'lg:col-span-2' : ''
                            }`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`w-7 h-7 bg-gradient-to-r ${feature.color} bg-clip-text`} style={{ color: feature.color.includes('green') ? '#16a34a' : '#059669' }} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600">
                        Want to learn more about our platform?{' '}
                        <button className="text-green-600 font-medium hover:text-green-700 underline underline-offset-4">
                            Schedule a demo
                        </button>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}