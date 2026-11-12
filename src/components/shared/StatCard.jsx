import React from 'react';

export default function StatCard({ value, label, suffix = '', prefix = '' }) {
    return (
        <div className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#76b82a] hover:shadow-lg transition-all duration-300">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3d5a30] to-[#76b82a] mb-2">
                {prefix}{value}{suffix}
            </div>
            <div className="text-gray-600 font-medium">
                {label}
            </div>
        </div>
    );
}