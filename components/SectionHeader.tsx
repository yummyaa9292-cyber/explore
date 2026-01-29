
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <div className="mb-10">
      <h2 className="text-[1.6rem] font-bold tracking-[2px] border-l-4 border-gray-800 pl-5 uppercase mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 mb-2">{description}</p>
      )}
      {subtitle && (
        <span className="text-[0.9rem] text-gray-400 tracking-[1px] block border-bottom border-gray-100 pb-2.5 uppercase font-medium">
          {subtitle}
        </span>
      )}
    </div>
  );
};

export default SectionHeader;
