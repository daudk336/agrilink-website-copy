import React from 'react';

export default function FeatureCard({ icon: Icon, title, description, gradient }) {
    return (
        <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Icon Container */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" />
            </div>
            
            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>

            {/* Hover Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    );
}