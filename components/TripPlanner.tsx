import React, { useState } from 'react';
import { Calendar, DollarSign, Heart, Loader2, ScrollText, Feather, MapPin } from 'lucide-react';
import { TripPreferences, ItineraryResult } from '../types';
import { generateItinerary } from '../services/geminiService';
import { INTEREST_TAGS } from '../constants';

const TripPlanner: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ItineraryResult | null>(null);
  const [formData, setFormData] = useState<TripPreferences>({
    days: 5,
    budget: '舒适',
    interests: [],
    startCity: '',
    destination: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const itinerary = await generateItinerary(formData);
      setResult(itinerary);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleInterest = (tag: string) => {
     setFormData(prev => ({
        ...prev,
        interests: prev.interests.includes(tag) 
           ? prev.interests.filter(i => i !== tag)
           : [...prev.interests, tag]
     }));
  };

  return (
    <section id="plan" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2A6E3F] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#2F3D4C] mb-4">山水行记 · 智能规划</h2>
          <div className="w-24 h-1 bg-[#2A6E3F] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 font-serif">输入您的心愿，AI 助手为您生成独一无二的山水路书</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Input Form */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8F5F0] p-8 rounded-lg shadow-lg border border-gray-200 lattice-border h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                   <label className="block text-[#2F3D4C] font-serif font-bold mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" /> 出发与目的
                   </label>
                   <div className="grid grid-cols-2 gap-4">
                      <input 
                         type="text" 
                         placeholder="出发城市 (如: 北京)"
                         className="w-full bg-white p-3 border border-gray-300 rounded focus:border-[#2A6E3F] focus:outline-none"
                         value={formData.startCity}
                         onChange={e => setFormData({...formData, startCity: e.target.value})}
                      />
                      <input 
                         type="text" 
                         placeholder="目的地 (选填)"
                         className="w-full bg-white p-3 border border-gray-300 rounded focus:border-[#2A6E3F] focus:outline-none"
                         value={formData.destination}
                         onChange={e => setFormData({...formData, destination: e.target.value})}
                      />
                   </div>
                </div>

                <div>
                   <label className="block text-[#2F3D4C] font-serif font-bold mb-2 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" /> 行程天数: <span className="text-[#2A6E3F] ml-2">{formData.days} 天</span>
                   </label>
                   <input 
                      type="range" min="1" max="15" 
                      value={formData.days}
                      onChange={e => setFormData({...formData, days: parseInt(e.target.value)})}
                      className="w-full accent-[#2A6E3F] h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                   />
                </div>

                <div>
                   <label className="block text-[#2F3D4C] font-serif font-bold mb-2 flex items-center">
                      <DollarSign className="w-4 h-4 mr-2" /> 预算偏好
                   </label>
                   <div className="grid grid-cols-3 gap-2">
                      {['经济穷游', '舒适标准', '豪华轻奢'].map(b => (
                         <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({...formData, budget: b})}
                            className={`py-2 text-sm border transition-colors ${
                               formData.budget === b 
                                  ? 'bg-[#2F3D4C] text-white border-[#2F3D4C]' 
                                  : 'bg-white text-gray-600 border-gray-300 hover:border-[#2F3D4C]'
                            }`}
                         >
                            {b}
                         </button>
                      ))}
                   </div>
                </div>

                <div>
                   <label className="block text-[#2F3D4C] font-serif font-bold mb-2 flex items-center">
                      <Heart className="w-4 h-4 mr-2" /> 体验偏好
                   </label>
                   <div className="flex flex-wrap gap-2">
                      {INTEREST_TAGS.map(tag => (
                         <button
                            key={tag}
                            type="button"
                            onClick={() => toggleInterest(tag)}
                            className={`px-3 py-1 text-sm rounded-full transition-colors ${
                               formData.interests.includes(tag)
                                  ? 'bg-[#2A6E3F] text-white'
                                  : 'bg-white text-gray-600 border border-gray-300 hover:border-[#2A6E3F]'
                            }`}
                         >
                            {tag}
                         </button>
                      ))}
                   </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full mt-4 bg-[#C84B31] text-white py-4 rounded font-serif font-bold text-lg hover:bg-[#a83b24] transition-colors shadow-lg disabled:opacity-70 flex justify-center items-center"
                >
                  {loading ? <Loader2 className="animate-spin mr-2" /> : <Feather className="mr-2 w-5 h-5" />}
                  {loading ? 'AI 正在研墨挥毫...' : '生成山水路书'}
                </button>
              </form>
            </div>
          </div>

          {/* Result Display */}
          <div className="lg:col-span-7">
             <div className="bg-white border-2 border-[#2F3D4C] p-1 rounded-lg h-full min-h-[500px] shadow-2xl relative">
                <div className="border border-[#2F3D4C] h-full p-6 md:p-10 relative overflow-hidden flex flex-col">
                   
                   {/* Decorative Stamps */}
                   <div className="absolute top-4 right-4 w-16 h-16 border-2 border-red-800 rounded opacity-20 rotate-12 flex items-center justify-center font-serif text-red-800 font-bold text-xs pointer-events-none">
                      山水<br/>路书
                   </div>

                   {!result && !loading && (
                      <div className="flex-grow flex flex-col items-center justify-center text-gray-400">
                         <ScrollText className="w-20 h-20 mb-6 opacity-30" />
                         <p className="font-serif text-lg tracking-widest">静候君之所向</p>
                      </div>
                   )}

                   {loading && (
                      <div className="flex-grow flex flex-col items-center justify-center">
                         <Loader2 className="w-12 h-12 text-[#2A6E3F] animate-spin mb-4" />
                         <p className="font-serif text-[#2F3D4C]">正在绘制行程画卷...</p>
                      </div>
                   )}

                   {result && !loading && (
                      <div className="animate-fade-in overflow-y-auto custom-scroll pr-4">
                         <h3 className="text-2xl font-serif font-bold text-[#2F3D4C] mb-6 border-b pb-4">
                            您的专属行程单
                         </h3>
                         <div className="prose prose-stone prose-headings:font-serif prose-headings:text-[#2A6E3F] max-w-none mb-8">
                            <div className="whitespace-pre-wrap font-serif text-gray-700 leading-relaxed">
                               {result.plan}
                            </div>
                         </div>
                         
                         <div className="bg-[#F8F5F0] p-6 rounded border border-gray-200">
                            <h4 className="font-serif font-bold text-[#2F3D4C] mb-4 flex items-center">
                               <div className="w-2 h-2 bg-[#C84B31] rounded-full mr-2"></div>
                               行囊清单
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                               {result.packingList.map((item, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-gray-600">
                                     <span className="text-[#2A6E3F] mr-2">❖</span>
                                     {item}
                                  </div>
                               ))}
                            </div>
                         </div>
                      </div>
                   )}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TripPlanner;