import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'hello@agrilink.com', href: 'mailto:hello@agrilink.com' },
        { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
        { icon: MapPin, label: 'Office', value: 'Nairobi, Kenya', href: '#' },
    ];

    const socialLinks = [
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    return (
        <section id="contact" className="py-24 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-green-600 font-medium text-sm tracking-wider uppercase">Contact Us</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                        Let's grow together
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions or want to partner with us? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h3>
                            <p className="text-gray-600 mb-8">
                                Whether you're a farmer looking to join our platform, a buyer seeking quality produce, 
                                or an investor interested in sustainable agriculture, we're here to help.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-5">
                            {contactInfo.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                                        <item.icon className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">{item.label}</div>
                                        <div className="text-gray-900 font-medium group-hover:text-green-600 transition-colors">
                                            {item.value}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500 mb-4">Follow us on social media</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-green-600 hover:border-green-600 group transition-all"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50">
                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <Input
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="h-12 rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="h-12 rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <Input
                                    placeholder="How can we help?"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="h-12 rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
                                />
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <Textarea
                                    placeholder="Tell us more about your inquiry..."
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500 resize-none"
                                />
                            </div>

                            <Button 
                                type="submit"
                                size="lg"
                                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl h-14 text-base group"
                            >
                                Send Message
                                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <p className="text-center text-sm text-gray-500 mt-6">
                                We typically respond within 24 hours
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}