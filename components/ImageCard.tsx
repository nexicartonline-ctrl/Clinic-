
import React from 'react';

interface ImageCardProps {
  title: string;
  description: string;
  image: string;
  buttonLabel?: string;
  onClick?: () => void;
  height?: string;
  overlayClass?: string;
  className?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ 
  title, 
  description, 
  image, 
  buttonLabel, 
  onClick,
  height = "h-[300px]",
  overlayClass = "bg-blue-900/40",
  className = ""
}) => {
  return (
    <div 
      className={`relative group overflow-hidden rounded-2xl shadow-xl scroll-reveal reveal-zoom ${height} ${className}`}
    >
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      <div className={`absolute inset-0 ${overlayClass} flex flex-col justify-end p-6 md:p-8 transition-opacity duration-500 group-hover:opacity-90`}>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-shadow transform transition-transform duration-500 group-hover:-translate-y-1">
          {title}
        </h3>
        <p className="text-blue-50 text-sm md:text-base mb-4 opacity-90 leading-relaxed transform transition-transform duration-500 group-hover:-translate-y-1">
          {description}
        </p>
        {buttonLabel && (
          <button 
            onClick={onClick}
            className="self-start px-6 py-2 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-all text-sm uppercase tracking-wider active:scale-95 shadow-lg"
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};
