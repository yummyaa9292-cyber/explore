
import React from 'react';
import SectionHeader from './components/SectionHeader';
import SkillCircle from './components/SkillCircle';
import WorkCard from './components/WorkCard';
import { 
  ACQUIRED_SKILLS, 
  LOADING_SKILLS, 
  POSTER_WORKS, 
  VIDEO_WORKS, 
  GALLERY_PORTRAIT, 
  GALLERY_LANDSCAPE 
} from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="hero-fixed relative h-screen w-full flex flex-col items-center justify-center text-white text-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000&auto=format&fit=crop')` }}>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Navigation */}
        <nav className="absolute top-[30px] right-4 md:right-[50px] z-20 hidden sm:flex space-x-[30px]">
          {['技能', '策划', '摄影', '探索'].map((item, i) => (
            <a 
              key={i} 
              href={`#${['skills', 'curation', 'gallery', 'explore'][i]}`}
              className="text-white/80 text-[0.9rem] tracking-[1px] uppercase transition-all duration-300 hover:text-white relative group"
            >
              {item}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 p-5 animate-[fadeIn_1.5s_ease-out]">
          <h1 className="text-[2.5rem] md:text-[3rem] mb-1.5 tracking-[6px] uppercase font-light leading-tight">
            The World Is<br />Mine Oyster
          </h1>
          <p className="text-[1.2rem] md:text-[1.5rem] mt-0 font-light tracking-[4px] opacity-90">
            做世界的牡蛎
          </p>
          <div className="w-[40px] h-[2px] bg-white mx-auto my-[30px]"></div>
          <p className="text-[1rem] md:text-[1.1rem] max-w-[600px] leading-relaxed text-white/90 mt-5 mx-auto">
            你好，我是探索者于淼淼。
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[30px] z-10 text-white opacity-80 animate-bounce-custom text-[1.5rem] cursor-default">
          ⌄
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-[1000px] mx-auto bg-white px-5 sm:px-10 py-20 relative z-10 shadow-2xl">
        
        {/* Section 1: Skills */}
        <section id="skills" className="pt-15 mb-24">
          <SectionHeader 
            title="01. 技能解锁 / UNLOCKED" 
            description="用身体感知世界，用灵感回报世界。" 
          />
          
          <div className="mb-10">
            <span className="text-[0.8rem] text-gray-400 tracking-[2px] uppercase font-bold block mb-5">ACQUIRED (已解锁)</span>
            <div className="flex flex-wrap gap-[25px] justify-start">
              {ACQUIRED_SKILLS.map((skill, i) => (
                <SkillCircle key={i} {...skill} />
              ))}
            </div>
          </div>

          <div>
            <span className="text-[0.8rem] text-gray-400 tracking-[2px] uppercase font-bold block mb-5">LOADING... (计划中)</span>
            <div className="flex flex-wrap gap-[25px] justify-start">
              {LOADING_SKILLS.map((skill, i) => (
                <SkillCircle key={i} {...skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Curation */}
        <section id="curation" className="pt-15 mb-24">
          <SectionHeader 
            title="02. 策划作品 / CURATION" 
            description="这里记录我在云谷学校的品牌策划。" 
          />
          
          <div className="mb-14">
            <span className="text-[0.9rem] text-gray-400 tracking-[1px] block border-b border-gray-100 pb-2.5 uppercase font-medium mb-8">POSTERS / 品牌海报</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {POSTER_WORKS.map((work, i) => (
                <WorkCard key={i} {...work} />
              ))}
            </div>
          </div>

          <div>
            <span className="text-[0.9rem] text-gray-400 tracking-[1px] block border-b border-gray-100 pb-2.5 uppercase font-medium mb-8">VIDEOS / 视频策划</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VIDEO_WORKS.map((work, i) => (
                <WorkCard key={i} {...work} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Gallery */}
        <section id="gallery" className="pt-15 mb-24">
          <SectionHeader 
            title="03. 摄影集 / GALLERY" 
            description="生命的尊贵在人海里。" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {GALLERY_PORTRAIT.map((photo, i) => (
              <WorkCard key={i} {...photo} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GALLERY_LANDSCAPE.map((photo, i) => (
              <WorkCard key={i} {...photo} />
            ))}
          </div>
        </section>

        {/* Section 4: Explore */}
        <section id="explore" className="pt-15 mb-24">
          <SectionHeader title="04. 55个少数民族 / EXPLORE" />
          
          <div className="border border-gray-200 p-10 relative bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            {/* Stamp */}
            <div className="absolute -top-5 right-5 w-[90px] h-[90px] border-[3px] border-red-700 rounded-full flex items-center justify-center text-red-700 font-bold -rotate-[15deg] bg-white/95 font-mono">
              ON ROAD
            </div>

            <h3 className="mt-0 text-[1.6rem] font-bold">我的探索护照</h3>
            <p className="text-gray-500 italic mt-1">“做世界的牡蛎，采集55种不同的文明色彩。”</p>
            
            <hr className="border-0 border-t-2 border-dashed border-gray-100 my-[30px]" />

            <div className="w-full">
              <p className="text-[0.7rem] font-bold tracking-[1px] text-gray-400 mb-2 uppercase">CURRENT PROGRESS</p>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[2%] h-full bg-gray-800"></div>
              </div>
              <p className="text-right text-[0.9rem] mt-2 font-bold">1 / 55</p>
            </div>

            <div className="mt-[30px] bg-gray-50 p-5 rounded-[4px]">
              <p className="m-0"><strong>🚩 下一站计划：</strong> 还没想好，也许是贵州？</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-[0.8rem] text-gray-300 border-t border-gray-100 pt-10">
          <p>© 2026 Designed by Yu Miaomiao.</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
