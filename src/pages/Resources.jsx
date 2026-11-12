import React, { useState } from 'react';
import { Book, TrendingUp, HelpCircle, Award, Search, ArrowRight, Calendar, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Resources() {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', label: 'All Resources', icon: Book },
        { id: 'guides', label: 'Guides', icon: Book },
        { id: 'market', label: 'Market Trends', icon: TrendingUp },
        { id: 'success', label: 'Success Stories', icon: Award },
        { id: 'faq', label: 'FAQs', icon: HelpCircle },
    ];

    const blogPosts = [
        {
            id: 1,
            category: 'guides',
            title: '10 Best Practices for Sustainable Farming',
            excerpt: 'Learn how to implement eco-friendly farming methods that increase yield while protecting the environment.',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449',
            author: 'Dr. Rajesh Kumar',
            date: '2024-12-15',
            readTime: '8 min read'
        },
        {
            id: 2,
            category: 'market',
            title: 'Understanding Agricultural Market Trends in 2024',
            excerpt: 'Key insights into crop pricing, demand patterns, and market opportunities for Indian farmers.',
            image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b',
            author: 'Priya Sharma',
            date: '2024-12-10',
            readTime: '6 min read'
        },
        {
            id: 3,
            category: 'guides',
            title: 'Getting Started with AgriLink: A Complete Guide',
            excerpt: 'Step-by-step guide to setting up your farm on AgriLink and connecting with the right markets.',
            image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d',
            author: 'AgriLink Team',
            date: '2024-12-05',
            readTime: '10 min read'
        },
        {
            id: 4,
            category: 'market',
            title: 'Direct-to-Market Sales: Maximizing Your Profits',
            excerpt: 'How to leverage direct market access to get fair prices and eliminate middlemen.',
            image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9',
            author: 'Ankit Verma',
            date: '2024-11-28',
            readTime: '7 min read'
        },
        {
            id: 5,
            category: 'guides',
            title: 'Smart Irrigation Techniques for Water Conservation',
            excerpt: 'Modern irrigation methods that save water while maintaining optimal crop health.',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
            author: 'Dr. Meena Patel',
            date: '2024-11-20',
            readTime: '9 min read'
        },
        {
            id: 6,
            category: 'market',
            title: 'Organic Farming: Market Demand and Pricing',
            excerpt: 'Explore the growing organic market and how to position your products for premium pricing.',
            image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
            author: 'Suresh Nair',
            date: '2024-11-15',
            readTime: '5 min read'
        }
    ];

    const successStories = [
        {
            id: 1,
            farmer: 'Manesh S',
            location: 'Pakalkuri, Kerala',
            story: 'The AgriLink app is really helpful for farmers who struggle to find the right marketplace. It makes things so much easier. Thanks for creating such a useful app.',
            impact: '45% increase in income',
            crop: 'Rice & Vegetables'
        },
        {
            id: 2,
            farmer: 'Ramesh Patil',
            location: 'Nashik, Maharashtra',
            story: 'AgriLink helped me connect directly with buyers. No more middlemen eating into my profits. I now get fair prices for my produce consistently.',
            impact: '60% increase in profit margins',
            crop: 'Grapes & Onions'
        },
        {
            id: 3,
            farmer: 'Lakshmi Devi',
            location: 'Guntur, Andhra Pradesh',
            story: 'As a woman farmer, AgriLink gave me confidence to sell directly to markets. The platform is easy to use and the support team is always helpful.',
            impact: '50% time saved in marketing',
            crop: 'Chili & Cotton'
        }
    ];

    const faqs = [
        {
            question: 'How do I get started with AgriLink?',
            answer: 'Simply download the AgriLink app, create your account, add your farm details, and start connecting with buyers. Our team provides free onboarding support to help you get started.'
        },
        {
            question: 'What are the fees for using AgriLink?',
            answer: 'AgriLink offers a free basic plan for all farmers. Premium features are available at affordable rates with transparent pricing and no hidden fees.'
        },
        {
            question: 'How does AgriLink ensure fair pricing?',
            answer: 'We provide real-time market data, connect you directly with verified buyers, and eliminate middlemen. This ensures you get fair market prices for your produce.'
        },
        {
            question: 'Can I sell all types of crops on AgriLink?',
            answer: 'Yes! AgriLink supports all types of agricultural produce including grains, vegetables, fruits, spices, and cash crops. We connect you with the right buyers for your specific products.'
        },
        {
            question: 'Is AgriLink available in my language?',
            answer: 'AgriLink supports multiple Indian languages including Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, and Gujarati, making it accessible to farmers across India.'
        },
        {
            question: 'How secure are my transactions on AgriLink?',
            answer: 'All transactions on AgriLink are fully secured with encryption and verified payment partners. We ensure safe and transparent dealings between farmers and buyers.'
        }
    ];

    const filteredContent = blogPosts.filter(post => {
        const matchesTab = activeTab === 'all' || post.category === activeTab;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-[#76b82a]/5 to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 text-[#3d5a30] rounded-full text-sm font-medium mb-6">
                        <Book className="w-4 h-4" />
                        Knowledge Hub
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Resources &
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3d5a30] to-[#76b82a]">
                            Learning Center
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Empowering farmers with knowledge, insights, and best practices for modern agriculture.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Search articles, guides, and resources..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-14 pl-12 pr-4 rounded-xl border-gray-200 focus:border-[#76b82a] focus:ring-[#76b82a] text-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="py-8 border-b border-gray-100 sticky top-20 bg-white z-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                                        activeTab === category.id
                                            ? 'bg-[#76b82a] text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Blog Posts & Guides */}
            {activeTab !== 'success' && activeTab !== 'faq' && (
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredContent.map((post) => (
                                <article
                                    key={post.id}
                                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-[#76b82a] transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="aspect-video overflow-hidden bg-gray-100">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#76b82a] transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <User className="w-4 h-4" />
                                                <span>{post.author}</span>
                                            </div>
                                            <button className="text-[#76b82a] font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read More
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Success Stories */}
            {activeTab === 'success' && (
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Farmer Success Stories
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Real stories from farmers who transformed their livelihoods with AgriLink
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {successStories.map((story) => (
                                <div
                                    key={story.id}
                                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:border-[#76b82a] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#76b82a] to-[#5a9920] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                            {story.farmer[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">{story.farmer}</h3>
                                            <p className="text-gray-600 text-sm">{story.location}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span key={star} className="text-[#76b82a] text-xl">★</span>
                                        ))}
                                    </div>

                                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                                        "{story.story}"
                                    </p>

                                    <div className="space-y-2 pt-6 border-t border-gray-100">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Crops:</span>
                                            <span className="font-semibold text-gray-900">{story.crop}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Impact:</span>
                                            <span className="text-[#76b82a] font-bold">{story.impact}</span>
                                        </div>
                                    </div>

                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#76b82a]/10 text-[#3d5a30] rounded-full text-xs font-medium mt-4">
                                        <Award className="w-3 h-3" />
                                        Verified Farmer
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQs */}
            {activeTab === 'faq' && (
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-xl text-gray-600">
                                Find answers to common questions about AgriLink
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#76b82a] transition-all duration-300"
                                >
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                            {faq.question}
                                        </h3>
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#76b82a]/10 flex items-center justify-center group-open:bg-[#76b82a] transition-colors">
                                            <HelpCircle className="w-5 h-5 text-[#76b82a] group-open:text-white transition-colors" />
                                        </div>
                                    </summary>
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>

                        <div className="mt-12 text-center p-8 bg-gradient-to-r from-[#76b82a]/10 to-[#5a9920]/10 rounded-2xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Still have questions?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Our support team is here to help you 24/7
                            </p>
                            <Button className="bg-gradient-to-r from-[#76b82a] to-[#5a9920] text-white hover:shadow-xl hover:scale-105 transition-all duration-300">
                                Contact Support
                            </Button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}