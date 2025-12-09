import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explore from './components/Explore';
import TripPlanner from './components/TripPlanner';
import RealTimeStatus from './components/RealTimeStatus';
import EcoGuardian from './components/EcoGuardian';
import Footer from './components/Footer';
import { Park } from './types';
import { X, Clock, Ticket, Bus, CloudSun, BookOpen, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [heroSearchTerm, setHeroSearchTerm] = useState('');
  const [selectedPark, setSelectedPark] = useState<Park | null>(null);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (term: string) => {
    setHeroSearchTerm(term);
  };

  return (
    <div className="min-h-screen font-sans text-[#2F3D4C]">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        <Hero onSearch={handleSearch} onSelectPark={setSelectedPark} />
        <Explore initialSearchTerm={heroSearchTerm} onSelectPark={setSelectedPark} />
        <TripPlanner />
        <RealTimeStatus />
        <EcoGuardian />
        
        {/* Culture & Utilities Section (Simplified implementation) */}
        <section id="culture" className="py-20 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-serif font-bold text-[#2F3D4C] mb-12">山水文脉 · 诗意栖居</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-[#F8F5F0] p-8 rounded lattice-border text-left relative overflow-hidden group hover:bg-[#F0EBE0] transition-colors cursor-pointer">
                    <div className="absolute right-0 top-0 p-4 opacity-10">
                       <BookOpen className="w-24 h-24" />
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-4">诗词匹配</h3>
                    <p className="text-gray-600 mb-4">输入您的心情或景象，AI 为您匹配最应景的古典诗词，让旅行充满诗意。</p>
                    <div className="text-[#2A6E3F] font-bold text-sm">开始匹配 &rarr;</div>
                 </div>
                 <div className="bg-[#F8F5F0] p-8 rounded lattice-border text-left relative overflow-hidden group hover:bg-[#F0EBE0] transition-colors cursor-pointer">
                    <div className="absolute right-0 top-0 p-4 opacity-10">
                       <CloudSun className="w-24 h-24" />
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-4">二十四节气旅行</h3>
                    <p className="text-gray-600 mb-4">跟着节气去旅行，发现不同时节中国大地的独特色彩与物候变化。</p>
                    <div className="text-[#2A6E3F] font-bold text-sm">查看日历 &rarr;</div>
                 </div>
              </div>
           </div>
        </section>

        <section id="utilities" className="py-20 bg-[#2F3D4C] text-gray-300 border-b border-white/5">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-serif font-bold text-white mb-8">行前百宝箱</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                 {['入园预约', '交通接驳', '高反计算', '装备租赁'].map(item => (
                    <div key={item} className="p-4 bg-white/5 rounded hover:bg-white/10 cursor-pointer transition-colors border border-white/10">
                       {item}
                    </div>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <Footer />

      {/* Park Detail Modal - Enhanced Style */}
      {selectedPark && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#2F3D4C]/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#F8F5F0] rounded w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative lattice-border">
            <button 
              onClick={() => setSelectedPark(null)}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white text-[#2F3D4C] transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="h-72 sm:h-96 w-full relative">
              <img src={selectedPark.imageUrl} alt={selectedPark.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F3D4C] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-block px-3 py-1 bg-[#C84B31] text-white text-xs font-bold mb-3 rounded-sm">
                   {selectedPark.category}
                </div>
                <h2 className="text-4xl font-serif font-bold text-white mb-2">{selectedPark.name}</h2>
                <div className="flex items-center text-gray-300 font-serif">
                   <span className="mr-4 flex items-center"><MapPin className="w-4 h-4 mr-1"/> {selectedPark.location}</span>
                   <span className="flex items-center"><div className="w-3 h-3 rounded-full mr-2" style={{backgroundColor: selectedPark.seasonColor}}></div>{selectedPark.seasonColorName}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
               <div className="mb-8 border-l-4 border-[#2A6E3F] pl-4 italic text-gray-600 font-serif text-lg bg-white p-4 rounded-r shadow-sm">
                  "{selectedPark.poetry}"
               </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6 text-[#2F3D4C]">
                  <div>
                     <h3 className="font-bold font-serif text-xl mb-3 flex items-center">
                        <span className="w-8 h-px bg-[#2F3D4C] mr-2"></span> 简介
                     </h3>
                     <p className="text-gray-600 leading-relaxed">{selectedPark.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                     <div className="bg-white p-4 rounded border border-gray-100">
                        <h4 className="font-bold mb-2 flex items-center"><Clock className="w-4 h-4 mr-2 text-[#2A6E3F]"/> 开放时间</h4>
                        <p className="text-sm text-gray-600">{selectedPark.openTime}</p>
                     </div>
                     <div className="bg-white p-4 rounded border border-gray-100">
                        <h4 className="font-bold mb-2 flex items-center"><Ticket className="w-4 h-4 mr-2 text-[#2A6E3F]"/> 门票信息</h4>
                        <p className="text-sm text-gray-600">{selectedPark.ticketInfo}</p>
                     </div>
                     <div className="bg-white p-4 rounded border border-gray-100">
                        <h4 className="font-bold mb-2 flex items-center"><Bus className="w-4 h-4 mr-2 text-[#2A6E3F]"/> 交通指南</h4>
                        <p className="text-sm text-gray-600">{selectedPark.transportInfo}</p>
                     </div>
                     <div className="bg-white p-4 rounded border border-gray-100">
                        <h4 className="font-bold mb-2 flex items-center"><CloudSun className="w-4 h-4 mr-2 text-[#2A6E3F]"/> 气候贴士</h4>
                        <p className="text-sm text-gray-600">{selectedPark.weatherInfo}</p>
                     </div>
                  </div>
                </div>

                {/* Sidebar Info */}
                <div className="md:col-span-1 space-y-6">
                   <div className="bg-[#2A6E3F]/10 p-6 rounded lattice-border">
                      <h4 className="font-bold font-serif mb-4 text-[#2A6E3F]">景观特色</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedPark.landscapes.map((l, i) => (
                           <span key={i} className="px-3 py-1 bg-white text-[#2F3D4C] text-xs font-bold border border-[#2A6E3F]/20">
                              {l}
                           </span>
                        ))}
                      </div>
                   </div>

                   <button 
                     onClick={() => {
                        setSelectedPark(null);
                        document.getElementById('plan')?.scrollIntoView({behavior: 'smooth'});
                     }}
                     className="w-full bg-[#2A6E3F] text-white py-4 font-bold font-serif hover:bg-[#1e522d] transition-colors shadow-lg"
                   >
                     生成此地路书
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;