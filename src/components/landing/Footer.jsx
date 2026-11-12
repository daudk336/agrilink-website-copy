import React from 'react';
import { Leaf } from 'lucide-react';

const footerLinks = {
    Product: ['Features', 'Pricing', 'Integrations', 'API'],
    Company: ['About', 'Careers', 'Press', 'Partners'],
    Resources: ['Blog', 'Help Center', 'Community', 'Guides'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
};

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-16">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <span className="text-xl font-semibold text-white">AgriLink</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-xs">
                            Connecting farms to futures. Empowering agriculture through technology and innovation.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Leaf className="w-4 h-4 text-green-500" />
                            <span>Carbon neutral since 2022</span>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-white font-semibold mb-4">{title}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a 
                                            href="#" 
                                            className="text-gray-400 hover:text-white transition-colors text-sm"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} AgriLink. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                                Cookie Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}