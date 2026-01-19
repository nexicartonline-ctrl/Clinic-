
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-12 text-center scroll-reveal reveal-up">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-blue-50' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 mx-auto mt-6 rounded-full transform transition-all duration-1000 origin-left ${light ? 'bg-teal-400' : 'bg-blue-600'}`}></div>
    </div>
  );
};
