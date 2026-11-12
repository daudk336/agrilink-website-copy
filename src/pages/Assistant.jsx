import React, { useState, useRef, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Send, Sparkles, Loader2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import ReactMarkdown from 'react-markdown';

export default function Assistant() {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: `Hello! 👋 I'm your AgriLink AI Assistant. I'm here to help you with:

• **Farming Best Practices** - Crop management, irrigation, soil health
• **Market Insights** - Pricing trends, demand analysis, selling strategies  
• **Pest & Disease Identification** - Upload images for diagnosis
• **AgriLink Features** - How to use the platform effectively
• **Personalized Advice** - Based on your farm details

Feel free to ask me anything or share photos of your crops!`
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [uploadedImages, setUploadedImages] = useState([]);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files);
        const uploadPromises = files.map(async (file) => {
            const { file_url } = await base44.integrations.Core.UploadFile({ file });
            return file_url;
        });
        const urls = await Promise.all(uploadPromises);
        setUploadedImages([...uploadedImages, ...urls]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() && uploadedImages.length === 0) return;

        const userMessage = {
            role: 'user',
            content: input || 'Please analyze these images',
            images: uploadedImages.length > 0 ? uploadedImages : undefined
        };

        setMessages([...messages, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const systemPrompt = `You are an expert agricultural AI assistant for AgriLink, a platform that connects farmers directly to markets.

**About AgriLink:**
- Provides direct market access eliminating middlemen
- Offers real-time market pricing and trends
- Features include: Smart Monitoring, AI-powered Insights, Market Intelligence, Financial Services
- Supports all crops: grains, vegetables, fruits, spices, cash crops
- Available in multiple Indian languages
- Has helped farmers achieve 45-60% income increase

**Your Role:**
- Provide practical, actionable farming advice tailored to Indian agriculture
- Help identify pests/diseases from images
- Explain market trends and pricing strategies
- Guide farmers on using AgriLink features effectively
- Suggest relevant resources from AgriLink's knowledge base
- Be conversational, friendly, and supportive
- Use simple language that farmers can understand

**When analyzing crop images:**
- Identify the crop, growth stage, and any visible issues
- Provide specific remedies and preventive measures
- Suggest when to seek professional help

**For market questions:**
- Reference current trends in Indian agriculture
- Explain fair pricing concepts
- Guide on when and how to sell through AgriLink

Always be encouraging and focus on practical solutions that farmers can implement.`;

            const userPrompt = uploadedImages.length > 0
                ? `${input}\n\nI've uploaded ${uploadedImages.length} image(s) for analysis. Please examine them carefully and provide detailed insights.`
                : input;

            const response = await base44.integrations.Core.InvokeLLM({
                prompt: `${systemPrompt}\n\nUser Question: ${userPrompt}`,
                file_urls: uploadedImages.length > 0 ? uploadedImages : undefined
            });

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: response
            }]);
            setUploadedImages([]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again or contact support if the issue persists.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const quickQuestions = [
        "What are the best irrigation practices for my crops?",
        "How can I get better prices for my produce?",
        "What are current market trends for vegetables?",
        "How do I use AgriLink to connect with buyers?"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#76b82a]/5 to-white">
            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 text-[#3d5a30] rounded-full text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        AI-Powered Assistant
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Your Farming{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d5a30] to-[#76b82a]">
                            AI Expert
                        </span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Get instant answers to your farming questions, market insights, and personalized advice
                    </p>
                </div>

                {/* Chat Container */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Messages */}
                    <div className="h-[500px] overflow-y-auto p-6 space-y-6">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {message.role === 'assistant' && (
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#76b82a] to-[#5a9920] flex items-center justify-center shadow-lg">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                )}
                                <div className={`max-w-[80%] ${message.role === 'user' ? 'order-first' : ''}`}>
                                    <div
                                        className={`rounded-2xl px-6 py-4 ${
                                            message.role === 'user'
                                                ? 'bg-[#76b82a] text-white'
                                                : 'bg-gray-50 text-gray-900'
                                        }`}
                                    >
                                        {message.images && (
                                            <div className="grid grid-cols-2 gap-2 mb-3">
                                                {message.images.map((img, i) => (
                                                    <img
                                                        key={i}
                                                        src={img}
                                                        alt="Upload"
                                                        className="rounded-lg w-full h-32 object-cover"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        {message.role === 'user' ? (
                                            <p className="text-white">{message.content}</p>
                                        ) : (
                                            <ReactMarkdown
                                                className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
                                                components={{
                                                    p: ({ children }) => <p className="mb-2 leading-relaxed">{children}</p>,
                                                    ul: ({ children }) => <ul className="list-disc ml-4 mb-2 space-y-1">{children}</ul>,
                                                    ol: ({ children }) => <ol className="list-decimal ml-4 mb-2 space-y-1">{children}</ol>,
                                                    strong: ({ children }) => <strong className="font-bold text-[#3d5a30]">{children}</strong>,
                                                    h3: ({ children }) => <h3 className="font-bold text-lg mb-2 mt-3">{children}</h3>,
                                                }}
                                            >
                                                {message.content}
                                            </ReactMarkdown>
                                        )}
                                    </div>
                                </div>
                                {message.role === 'user' && (
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-600 font-semibold">You</span>
                                    </div>
                                )}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex gap-4 justify-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#76b82a] to-[#5a9920] flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <div className="bg-gray-50 rounded-2xl px-6 py-4">
                                    <Loader2 className="w-5 h-5 text-[#76b82a] animate-spin" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Questions */}
                    {messages.length === 1 && (
                        <div className="px-6 pb-4 border-t border-gray-100">
                            <p className="text-sm text-gray-600 mb-3 mt-4">Quick questions to get started:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {quickQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setInput(question)}
                                        className="text-left px-4 py-3 bg-gray-50 hover:bg-[#76b82a]/10 rounded-xl text-sm text-gray-700 hover:text-[#3d5a30] transition-colors border border-gray-100 hover:border-[#76b82a]"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input Area */}
                    <div className="border-t border-gray-100 p-6">
                        {uploadedImages.length > 0 && (
                            <div className="flex gap-2 mb-3 flex-wrap">
                                {uploadedImages.map((img, index) => (
                                    <div key={index} className="relative">
                                        <img src={img} alt="Preview" className="w-20 h-20 rounded-lg object-cover" />
                                        <button
                                            onClick={() => setUploadedImages(uploadedImages.filter((_, i) => i !== index))}
                                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="flex gap-3">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => fileInputRef.current?.click()}
                                className="flex-shrink-0 h-12 w-12 rounded-xl border-gray-200 hover:border-[#76b82a] hover:bg-[#76b82a]/10"
                            >
                                <ImageIcon className="w-5 h-5" />
                            </Button>
                            <Textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSubmit(e);
                                    }
                                }}
                                placeholder="Ask about farming practices, market trends, pest identification..."
                                className="flex-1 min-h-[48px] max-h-32 resize-none rounded-xl border-gray-200 focus:border-[#76b82a] focus:ring-[#76b82a]"
                                rows={1}
                            />
                            <Button
                                type="submit"
                                disabled={isLoading || (!input.trim() && uploadedImages.length === 0)}
                                className="flex-shrink-0 h-12 px-6 bg-gradient-to-r from-[#76b82a] to-[#5a9920] hover:shadow-lg transition-all disabled:opacity-50 rounded-xl"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <Send className="w-5 h-5" />
                                )}
                            </Button>
                        </form>
                        <p className="text-xs text-gray-500 mt-3 text-center">
                            AI responses are generated based on general knowledge and AgriLink resources. 
                            For critical issues, please consult with agricultural experts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}