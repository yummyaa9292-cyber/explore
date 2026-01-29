
import React from 'react';
import { WorkItem } from '../types';

const WorkCard: React.FC<WorkItem> = ({ image, title, desc, ratio }) => {
  return (
    <div className="group transition-transform duration-300 hover:-translate-y-1.5">
      <div className={`
        w-full overflow-hidden rounded-[4px] bg-gray-200 mb-[15px]
        ${ratio === 'portrait' ? 'aspect-[2/3]' : 'aspect-video'}
      `}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="work-info">
        <p className="text-[1rem] font-bold m-0">{title}</p>
        <p className="text-[0.8rem] text-gray-400 mt-1">{desc}</p>
      </div>
    </div>
  );
};

export default WorkCard;
