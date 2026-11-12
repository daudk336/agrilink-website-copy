import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Leaf } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const navLinks = [
        { name: 'Home', page: 'Home' },
        { name: 'About', page: 'About' },
        { name: 'What We Do', page: 'WhatWeDo' },
        { name: 'Why AgriLink', page: 'WhyAgriLink' },
        { name: 'Resources', page: 'Resources' },
        { name: 'AI Assistant', page: 'Assistant' },
        { name: 'Contact', page: 'Contact' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link 
                            to={createPageUrl('Home')} 
                            className="flex items-center gap-3 group"
                        >
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694c0b925377af21a066bfeb/83967ab55_AgriLinkLogo.png" 
                                alt="AgriLink Logo" 
                                className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.page}
                                    to={createPageUrl(link.page)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        currentPageName === link.page
                                            ? 'text-[#76b82a] bg-[#76b82a]/10'
                                            : 'text-gray-600 hover:text-[#76b82a] hover:bg-gray-50'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                    to={createPageUrl('Contact')}
                                    className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#76b82a] to-[#5a9920] text-white rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    Join the Pilot
                                </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-600" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-600" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-100">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.page}
                                    to={createPageUrl(link.page)}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                        currentPageName === link.page
                                            ? 'text-[#76b82a] bg-[#76b82a]/10'
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                    to={createPageUrl('Contact')}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block mt-4 px-4 py-3 bg-gradient-to-r from-[#76b82a] to-[#5a9920] text-white rounded-lg text-sm font-medium text-center"
                                >
                                    Join the Pilot
                                </Link>
                        </div>
                    )}
                </div>
            </nav>

            {/* Page Content */}
            <div className="pt-20">
                {children}
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white mt-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="md:col-span-2">
                            <div className="mb-4">
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694c0b925377af21a066bfeb/83967ab55_AgriLinkLogo.png" 
                                    alt="AgriLink Logo" 
                                    className="h-20 w-auto mb-3"
                                />
                            </div>
                            <p className="text-gray-400 leading-relaxed max-w-md mb-4">
                                Fair Price. Fair Trade. Fair Future.
                            </p>
                            <p className="text-gray-400 leading-relaxed max-w-md">
                                Connecting farms to the future through innovative agricultural technology solutions.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Quick Links</h3>
                            <div className="space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.page}
                                        to={createPageUrl(link.page)}
                                        className="block text-gray-400 hover:text-[#76b82a] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Connect</h3>
                            <div className="space-y-2 text-gray-400">
                                <p>agrilink.app.in@gmail.com</p>
                                <p>+91 9566151043</p>
                                <p className="text-sm">Puzhal, Chennai, Tamil Nadu</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
                        <p>© 2024 AgriLink. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}