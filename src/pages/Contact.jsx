import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            detail: 'agrilink.app.in@gmail.com',
            link: 'mailto:agrilink.app.in@gmail.com'
        },
        {
            icon: Phone,
            title: 'Call Us',
            detail: '+91 9566151043',
            link: 'tel:+919566151043'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            detail: 'Puzhal, Chennai, Tamil Nadu, India',
            link: null
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-[#76b82a]/5 to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 text-[#3d5a30] rounded-full text-sm font-medium mb-6">
                        Get In Touch
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Let's Start a
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3d5a30] to-[#76b82a]">
                            Conversation
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Have questions about AgriLink? We're here to help you transform your farm 
                        with cutting-edge technology. Reach out today.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 -mt-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={index}
                                    href={item.link || '#'}
                                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:border-[#76b82a] transition-all duration-300 hover:-translate-y-1 text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#76b82a] to-[#5a9920] mb-4">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.detail}
                                    </p>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Side - Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                    Send Us a Message
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Fill out the form and our team will get back to you within 24 hours. 
                                    We're excited to learn about your farming operation.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#76b82a]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-[#76b82a]"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
                                        <p className="text-gray-600">We typically respond within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#76b82a]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-[#76b82a]"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Expert Guidance</h4>
                                        <p className="text-gray-600">Connect with our agricultural technology specialists</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#76b82a]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-[#76b82a]"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Custom Solutions</h4>
                                        <p className="text-gray-600">Tailored recommendations for your farm</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                                <div className="flex gap-3">
                                    <a
                                        href="https://www.instagram.com/agri.link_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-[#76b82a]/20 transition-colors flex items-center justify-center text-gray-600 hover:text-[#76b82a] font-semibold"
                                    >
                                        📷
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full h-12 px-4 rounded-xl border-gray-200 focus:border-[#76b82a] focus:ring-[#76b82a]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="john@farm.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full h-12 px-4 rounded-xl border-gray-200 focus:border-[#76b82a] focus:ring-[#76b82a]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <Input
                                        type="tel"
                                        placeholder="+91 9566151043"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full h-12 px-4 rounded-xl border-gray-200 focus:border-[#76b82a] focus:ring-[#76b82a]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <Textarea
                                        placeholder="Tell us about your farm and how we can help..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-[#76b82a] focus:ring-[#76b82a] resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 bg-gradient-to-r from-[#76b82a] to-[#5a9920] hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-semibold"
                                >
                                    Send Message
                                    <Send className="w-5 h-5 ml-2" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="aspect-[21/9] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-xl">
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl">
                            🗺️
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}