import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-[#76b82a]/5 to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 text-[#3d5a30] rounded-full text-sm font-medium mb-6">
                        About AgriLink
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Building the Future
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3d5a30] to-[#76b82a]">
                            of Agriculture
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We're on a mission to revolutionize farming through innovative technology, 
                        empowering every farmer to achieve sustainable growth and prosperity.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Image Placeholder */}
                        <div className="order-2 lg:order-1">
                            <div className="aspect-[4/3] bg-gradient-to-br from-[#76b82a] to-[#5a9920] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694c0b925377af21a066bfeb/83967ab55_AgriLinkLogo.png" 
                                    alt="AgriLink Mission" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Mission Content */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600">
                                <Target className="w-7 h-7" />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To bridge the gap between traditional farming practices and modern technology, 
                                making sustainable and efficient agriculture accessible to every farmer, 
                                regardless of size or location.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We believe that by providing the right tools and insights, we can help farmers 
                                increase productivity while preserving our planet for future generations.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Vision Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#76b82a]/20 text-[#3d5a30]">
                                <Eye className="w-7 h-7" />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Our Vision
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                A world where every farm operates at peak efficiency, every farmer has access 
                                to cutting-edge technology, and sustainable practices are the norm rather than 
                                the exception.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We envision connected agricultural communities where knowledge flows freely, 
                                resources are optimized, and innovation drives continuous improvement in 
                                food production.
                            </p>
                        </div>

                        {/* Image Placeholder */}
                        <div>
                            <div className="aspect-[4/3] bg-gradient-to-br from-[#3d5a30] to-[#76b82a] rounded-3xl overflow-hidden shadow-2xl">
                                <div className="w-full h-full flex items-center justify-center text-white/20 text-8xl">
                                    🚜
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Our Core Values
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                        The principles that guide everything we do
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🌍',
                                title: 'Sustainability',
                                description: 'Committed to practices that protect our planet and preserve resources for future generations.'
                            },
                            {
                                icon: '🤝',
                                title: 'Partnership',
                                description: 'Building lasting relationships with farmers, working together toward shared success.'
                            },
                            {
                                icon: '💡',
                                title: 'Innovation',
                                description: 'Constantly pushing boundaries to bring the latest technology to agricultural practices.'
                            }
                        ].map((value, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#76b82a] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                        Passionate experts dedicated to transforming agriculture
                    </p>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((member) => (
                            <div 
                                key={member}
                                className="group"
                            >
                                <div className="aspect-square bg-gradient-to-br from-[#76b82a]/30 to-[#76b82a]/60 rounded-2xl mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                    <div className="w-full h-full flex items-center justify-center text-white/30 text-6xl">
                                        👤
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    Team Member {member}
                                </h3>
                                <p className="text-gray-600">
                                    Position Title
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}