import React, { useState, useMemo } from 'react';
import { PARKS_DATA, REGIONS } from '../constants';
import { ParkCategory, LandscapeType, Park } from '../types';
import ParkCard from './ParkCard';
import { Filter, Map as MapIcon, Compass } from 'lucide-react';

interface ExploreProps {
  initialSearchTerm: string;
  onSelectPark: (park: Park) => void;
}

const Explore: React.FC<ExploreProps> = ({ initialSearchTerm, onSelectPark }) => {
  const [selectedRegion, setSelectedRegion] = useState('全部');
  const [selectedCategory, setSelectedCategory] = useState<ParkCategory | '全部'>('全部');
  const [selectedLandscape, setSelectedLandscape] = useState<LandscapeType | '全部'>('全部');

  const filteredParks = useMemo(() => {
    return PARKS_DATA.filter(park => {
      const matchSearch = initialSearchTerm === '' || 
        park.name.includes(initialSearchTerm) || 
        park.location.includes(initialSearchTerm);
      
      const matchCategory = selectedCategory === '全部' || park.category === selectedCategory;
      const matchLandscape = selectedLandscape === '全部' || park.landscapes.includes(selectedLandscape as LandscapeType);
      
      // Rough region mapping for demo
      let matchRegion = true;
      if (selectedRegion !== '全部') {
        const province = park.location;
        if (selectedRegion === '西北') matchRegion = ['青海', '陕西', '甘肃', '新疆'].some(p => province.includes(p));
        if (selectedRegion === '西南') matchRegion = ['四川', '西藏', '云南', '贵州', '重庆'].some(p => province.includes(p));
        if (selectedRegion === '华北/东北') matchRegion = ['吉林', '黑龙江', '北京', '内蒙古'].some(p => province.includes(p));
        if (selectedRegion === '华东/华中') matchRegion = ['安徽', '福建', '湖北', '湖南', '江西'].some(p => province.includes(p));
        if (selectedRegion === '华南') matchRegion = ['广东', '广西', '海南'].some(p => province.includes(p));
      }

      return matchSearch && matchRegion && matchCategory && matchLandscape;
    });
  }, [initialSearchTerm, selectedRegion, selectedCategory, selectedLandscape]);

  return (
    <section id="explore" className="py-20 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-serif font-bold text-[#2F3D4C] mb-4">神州画卷 · 探索发现</h2>
          <div className="w-24 h-1 bg-[#2A6E3F] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 font-serif">点击地图区域或筛选类型，展开您的自然探索地图</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Interactive "Map" Selector (Styled as abstract map) */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg border border-gray-100 lattice-border h-fit">
            <h3 className="font-serif font-bold text-lg mb-4 flex items-center text-[#2F3D4C]">
              <Compass className="w-5 h-5 mr-2 text-[#2A6E3F]" />
              区域导航
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => setSelectedRegion('全部')}
                className={`w-full text-left px-4 py-3 rounded transition-all ${selectedRegion === '全部' ? 'bg-[#2A6E3F] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                全域览胜
              </button>
              {REGIONS.map(region => (
                <button
                  key={region.name}
                  onClick={() => setSelectedRegion(region.name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded transition-all ${
                    selectedRegion === region.name 
                      ? 'bg-[#2F3D4C] text-white shadow-md' 
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <span>{region.name}</span>
                  <span className="w-3 h-3 rounded-full" style={{backgroundColor: region.color}}></span>
                </button>
              ))}
            </div>

            {/* Additional Filters */}
            <div className="mt-8 pt-6 border-t border-gray-200">
               <h3 className="font-serif font-bold text-lg mb-4 flex items-center text-[#2F3D4C]">
                  <Filter className="w-5 h-5 mr-2 text-[#2A6E3F]" />
                  分类筛选
               </h3>
               <div className="flex flex-wrap gap-2">
                  {Object.values(ParkCategory).map(cat => (
                     <button
                        key={cat}
                        onClick={() => setSelectedCategory(selectedCategory === cat ? '全部' : cat)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                           selectedCategory === cat 
                              ? 'bg-[#2A6E3F] text-white border-[#2A6E3F]' 
                              : 'border-gray-300 text-gray-500 hover:border-[#2A6E3F] hover:text-[#2A6E3F]'
                        }`}
                     >
                        {cat}
                     </button>
                  ))}
               </div>
            </div>
          </div>

          {/* Results Grid - Layered Layout */}
          <div className="lg:col-span-3">
             <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-gray-500 font-serif">共找到 {filteredParks.length} 处胜地</span>
             </div>

             {filteredParks.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {filteredParks.map((park, index) => (
                   <div key={park.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in-up">
                     <ParkCard park={park} onClick={onSelectPark} />
                   </div>
                 ))}
               </div>
             ) : (
               <div className="h-64 flex flex-col items-center justify-center text-gray-400 bg-white rounded-lg border-2 border-dashed border-gray-200">
                 <MapIcon className="w-12 h-12 mb-4 opacity-20" />
                 <p className="font-serif">此处暂无记录，请尝试其他区域</p>
               </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Explore;