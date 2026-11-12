import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { label: 'About', id: 'about' },
        { label: 'What We Do', id: 'features' },
        { label: 'Why AgriLink', id: 'why' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow">
                            <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <span className={`text-xl font-semibold tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                            AgriLink
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-green-50 hover:text-green-600 ${
                                    isScrolled ? 'text-gray-600' : 'text-gray-700'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button 
                            variant="ghost" 
                            className="text-gray-600 hover:text-green-600 hover:bg-green-50"
                        >
                            Log in
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 shadow-lg shadow-green-600/20 hover:shadow-green-600/40 transition-all">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="block w-full text-left px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="pt-4 space-y-2">
                                <Button variant="outline" className="w-full">Log in</Button>
                                <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}