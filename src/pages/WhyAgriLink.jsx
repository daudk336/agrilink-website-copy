import React from 'react';
import StatCard from '../components/shared/StatCard';
import { Award, TrendingUp, Shield, Zap, Users, Globe2 } from 'lucide-react';

export default function WhyAgriLink() {
    const stats = [
        { value: '10K', label: 'Active Farms', suffix: '+' },
        { value: '45', label: 'Yield Increase', suffix: '%' },
        { value: '30', label: 'Cost Reduction', suffix: '%' },
        { value: '99.9', label: 'Platform Uptime', suffix: '%' }
    ];

    const benefits = [
        {
            icon: TrendingUp,
            title: 'Maximize Productivity',
            description: 'Advanced analytics and real-time monitoring help you optimize every aspect of your operation for maximum efficiency.'
        },
        {
            icon: Shield,
            title: 'Reduce Risk',
            description: 'Predictive insights and early warning systems help you anticipate and prevent potential issues before they impact your crops.'
        },
        {
            icon: Zap,
            title: 'Save Time & Money',
            description: 'Automate routine tasks and make data-driven decisions that reduce waste and lower operational costs.'
        },
        {
            icon: Users,
            title: 'Expert Support',
            description: 'Access to agricultural experts and a growing community of farmers sharing knowledge and best practices.'
        },
        {
            icon: Globe2,
            title: 'Sustainable Practices',
            description: 'Tools and insights designed to help you implement environmentally responsible farming methods.'
        },
        {
            icon: Award,
            title: 'Proven Results',
            description: 'Join thousands of farmers who have already transformed their operations with measurable improvements.'
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-[#76b82a]/5 to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 text-[#3d5a30] rounded-full text-sm font-medium mb-6">
                        Why Choose Us
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        The AgriLink
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3d5a30] to-[#76b82a]">
                            Advantage
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience the difference that cutting-edge technology and dedicated support 
                        can make for your agricultural operation.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <StatCard
                                key={index}
                                value={stat.value}
                                label={stat.label}
                                suffix={stat.suffix}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Built for Modern Farming
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to succeed in today's agricultural landscape
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#76b82a] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#76b82a] to-[#5a9920] mb-6">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Trusted by Farmers
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real stories from farms using AgriLink
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6 italic">
                                    "AgriLink has transformed how we manage our farm. The insights are 
                                    invaluable and have helped us increase yields while reducing costs."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#76b82a]/60 to-[#76b82a]"></div>
                                    <div>
                                        <div className="font-bold text-gray-900">Farmer Name</div>
                                        <div className="text-sm text-gray-500">Farm Location</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            The AgriLink Difference
                        </h2>
                        <p className="text-xl text-gray-600">
                            See how we compare to traditional farming methods
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="p-8 border-r border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Farming</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Manual data collection',
                                        'Reactive problem solving',
                                        'Limited visibility',
                                        'Higher resource waste'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <span className="text-red-400 mt-1">✗</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-[#76b82a]/10 to-white">
                                <h3 className="text-2xl font-bold text-[#3d5a30] mb-6">With AgriLink</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Automated real-time monitoring',
                                        'Predictive analytics',
                                        'Complete farm overview',
                                        'Optimized resource usage'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <span className="text-[#76b82a] mt-1">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Join the growing community of farmers revolutionizing agriculture with AgriLink.
                    </p>
                    <button className="px-10 py-4 bg-gradient-to-r from-[#76b82a] to-[#5a9920] text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Start Free Trial
                    </button>
                </div>
            </section>
        </div>
    );
}