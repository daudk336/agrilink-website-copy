import React from 'react';
import FeatureCard from '../components/shared/FeatureCard';
import { Smartphone, CloudRain, BarChart3, Leaf, Cpu, Globe } from 'lucide-react';

export default function WhatWeDo() {
    const features = [
        {
            icon: Smartphone,
            title: 'Smart Monitoring',
            description: 'Real-time crop monitoring with IoT sensors tracking soil moisture, temperature, and nutrient levels to optimize growing conditions.',
            gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-600'
        },
        {
            icon: CloudRain,
            title: 'Weather Intelligence',
            description: 'Advanced weather forecasting and alerts helping you make informed decisions about planting, irrigation, and harvesting.',
            gradient: 'bg-gradient-to-br from-blue-500 to-blue-600'
        },
        {
            icon: BarChart3,
            title: 'Analytics Dashboard',
            description: 'Comprehensive data visualization and insights transforming raw data into actionable farming strategies.',
            gradient: 'bg-gradient-to-br from-purple-500 to-purple-600'
        },
        {
            icon: Leaf,
            title: 'Crop Management',
            description: 'End-to-end crop lifecycle management from seed selection to harvest optimization and quality control.',
            gradient: 'bg-gradient-to-br from-green-500 to-green-600'
        },
        {
            icon: Cpu,
            title: 'AI-Powered Insights',
            description: 'Machine learning algorithms predicting pest outbreaks, disease patterns, and optimal harvest times.',
            gradient: 'bg-gradient-to-br from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-[#76b82a]/5 to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 text-[#3d5a30] rounded-full text-sm font-medium mb-6">
                        What We Do
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Technology That
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3d5a30] to-[#76b82a]">
                            Powers Progress
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive agricultural solutions designed to streamline operations, 
                        boost productivity, and drive sustainable growth for modern farms.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                gradient={feature.gradient}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple steps to get started with AgriLink
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Sign Up', desc: 'Create your account and set up your farm profile' },
                            { step: '02', title: 'Connect', desc: 'Link your sensors and equipment to the platform' },
                            { step: '03', title: 'Monitor', desc: 'Track real-time data and receive insights' },
                            { step: '04', title: 'Optimize', desc: 'Implement recommendations and grow better' }
                        ].map((item, index) => (
                            <div key={index} className="relative text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#76b82a] to-[#5a9920] text-white text-2xl font-bold mb-4 shadow-lg">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.desc}
                                </p>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#76b82a]/60 to-[#76b82a]/20"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Preview */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#76b82a]/20 text-[#3d5a30]">
                                <Globe className="w-7 h-7" />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                All-in-One Platform
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Access everything you need from a single, intuitive dashboard. Monitor your 
                                entire operation, analyze trends, and make data-driven decisions with ease.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Cross-device synchronization',
                                    'Offline mode support',
                                    'Customizable dashboards',
                                    'Team collaboration tools'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-[#76b82a]/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-[#76b82a]"></div>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-7xl">
                                    📊
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}