import React from 'react';
import { Park } from '../types';
import { MapPin, Wind } from 'lucide-react';

interface ParkCardProps {
  park: Park;
  onClick: (park: Park) => void;
}

const ParkCard: React.FC<ParkCardProps> = ({ park, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-sm overflow-hidden lattice-border cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
      onClick={() => onClick(park)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={park.imageUrl} 
          alt={park.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
        />
        {/* Category Tag */}
        <div className="absolute top-0 left-4 bg-[#2F3D4C] text-[#F8F5F0] text-xs py-2 px-1 w-8 text-center font-serif writing-vertical shadow-md opacity-90">
          {park.category}
        </div>
        
        {/* Season Color Indicator */}
        <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur px-3 py-1 flex items-center gap-2 rounded-tl-lg">
           <span className="text-xs text-gray-600 font-serif">当季色 · {park.seasonColorName}</span>
           <span className="w-3 h-3 rounded-full border border-gray-300" style={{backgroundColor: park.seasonColor}}></span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold font-serif text-[#2F3D4C] group-hover:text-[#2A6E3F] transition-colors">{park.name}</h3>
        </div>
        
        <div className="flex items-center text-gray-500 text-xs mb-3 font-serif">
          <MapPin className="w-3 h-3 mr-1" />
          {park.location}
          <span className="mx-2">|</span>
          <Wind className="w-3 h-3 mr-1" />
          {park.bestSeason} 最佳
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 font-light leading-relaxed">
          {park.description}
        </p>

        <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
           <div className="flex gap-1">
            {park.landscapes.slice(0, 2).map((l, i) => (
                <span key={i} className="text-xs bg-[#F0F4F8] text-[#2F3D4C] px-2 py-1 rounded-sm">
                {l}
                </span>
            ))}
           </div>
           <span className={`text-xs px-2 py-0.5 border rounded ${
             park.crowdLevel === '拥挤' ? 'border-red-200 text-red-700' : 'border-green-200 text-green-700'
           }`}>
             {park.crowdLevel}
           </span>
        </div>
      </div>
    </div>
  );
};

export default ParkCard;