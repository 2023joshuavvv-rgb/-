import React, { useState } from 'react';
import { Search, MapPin, Calendar, Camera } from 'lucide-react';
import { PARKS_DATA } from '../constants';
import { Park } from '../types';

interface HeroProps {
  onSearch: (term: string) => void;
  onSelectPark: (park: Park) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch, onSelectPark }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const featuredParks = PARKS_DATA.filter(p => ['1', '2', '3'].includes(p.id));

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background mimicking Chinese Scroll Painting */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://picsum.photos/id/1015/1920/1080" 
            className="w-full h-full object-cover opacity-80" 
            alt="Landscape Background"
         />
         {/* Ink Overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#2F3D4C]/40 via-transparent to-[#F8F5F0]"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-40"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Title Block */}
        <div className="mb-12 animate-float">
          <h2 className="text-xl md:text-2xl text-white/90 font-serif tracking-[0.2em] mb-4">
            山水有相逢 · 天地入画来
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-serif drop-shadow-lg">
            探寻中华山水神韵
          </h1>
        </div>

        {/* Smart Search Bar */}
        <div className="w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-lg shadow-2xl p-2 mb-16 lattice-border">
          <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-center p-2">
            <div className="flex-1 w-full flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-200 py-3">
              <MapPin className="text-[#2A6E3F] w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="想去哪个省份？" 
                className="w-full bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-1 w-full flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-200 py-3">
               <Calendar className="text-[#2A6E3F] w-5 h-5 mr-3" />
               <select className="w-full bg-transparent focus:outline-none text-gray-800 appearance-none">
                  <option>春 · 花见</option>
                  <option>夏 · 避暑</option>
                  <option>秋 · 赏叶</option>
                  <option>冬 · 听雪</option>
               </select>
            </div>
            <div className="w-full md:w-auto p-2">
              <button 
                type="submit" 
                className="w-full bg-[#2A6E3F] hover:bg-[#1e522d] text-white px-8 py-3 rounded font-serif font-bold transition-colors flex items-center justify-center"
              >
                <Search className="w-4 h-4 mr-2" />
                寻幽
              </button>
            </div>
          </form>
        </div>

        {/* Featured Cards (Scrolls) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {featuredParks.map((park) => (
             <div 
                key={park.id}
                onClick={() => onSelectPark(park)} 
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#F8F5F0] shadow-xl border border-gray-200 transition-transform hover:-translate-y-2"
             >
                <div className="h-40 overflow-hidden relative">
                   <img src={park.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={park.name} />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                   <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs font-serif text-[#2F3D4C] rounded-sm shadow-sm">
                      {park.seasonColorName}
                   </div>
                </div>
                <div className="p-4 relative">
                   <h3 className="text-lg font-serif font-bold text-[#2F3D4C] mb-1">{park.name}</h3>
                   <p className="text-xs text-gray-500 mb-2 truncate">{park.poetry}</p>
                   <div className="flex items-center text-xs text-[#2A6E3F]">
                      <span>查看详情</span>
                      <div className="w-8 h-px bg-[#2A6E3F] ml-2 group-hover:w-12 transition-all"></div>
                   </div>
                </div>
             </div>
          ))}
        </div>
        
        {/* Quick Links */}
        <div className="mt-12 flex space-x-8 text-white/80 text-sm font-serif tracking-wider">
           <span className="flex items-center hover:text-white cursor-pointer"><div className="w-2 h-2 bg-[#C84B31] rounded-full mr-2"></div>世界遗产</span>
           <span className="flex items-center hover:text-white cursor-pointer"><div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>5A景区</span>
           <span className="flex items-center hover:text-white cursor-pointer"><div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>地质公园</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;