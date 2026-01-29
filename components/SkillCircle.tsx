
import React from 'react';
import { Skill } from '../types';

const SkillCircle: React.FC<Skill> = ({ emoji, name, locked }) => {
  return (
    <div 
      className={`
        w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 cubic-bezier(0.175, 0.885, 0.32, 1.275)
        ${locked 
          ? 'border-2 border-dashed border-gray-300 bg-transparent opacity-70 hover:border-gray-400 hover:opacity-100 scale-100 hover:scale-110' 
          : 'bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:scale-115 hover:-translate-y-1.5'
        }
      `}
    >
      <div className={`text-[2.2rem] mb-0.5 leading-none ${locked ? 'grayscale opacity-50 hover:grayscale-0 hover:opacity-100' : ''}`}>
        {emoji}
      </div>
      <div className="text-[0.7rem] text-gray-600 font-bold tracking-[1px] uppercase">
        {name}
      </div>
    </div>
  );
};

export default SkillCircle;
